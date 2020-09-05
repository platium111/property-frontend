import React, { useContext } from "react";
import "./App.css";
import ItemManagement from "./forms/ItemManagement/Property/index";
import "antd/dist/antd.css";
import { Layout, Row, Col, Menu } from "antd";
import { AuthenProvider, store } from "./context/index";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListItem from "./forms/ItemManagement/ListItem/index";
import MonthReport from "./forms/MonthReport";
import { SITE } from "./_constants/index";

import AWSAppSyncClient from "aws-appsync";
import { ApolloProvider, ApolloContext } from "react-apollo";
import { Rehydrated } from "aws-appsync-react";

axios.interceptors.request.use((config) => {
  config.timeout = 50000;
});

const { Header, Footer, Content } = Layout;
Amplify.configure(awsconfig);

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_project_region,
  auth: {
    type: awsconfig.aws_appsync_authenticationType,
    apiKey: awsconfig.aws_appsync_apiKey,
    // jwtToken: async () => token, // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
  },
});

const App = (props) => {
  return (
    <AuthenProvider>
      <AmplifySignOut />
      <Router>
        <Layout className="layout">
          {/* ---HEADER--- */}
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/">{SITE.NAV_CREATE_NEW}</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/list">{SITE.NAV_FIND}</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/month-report">{SITE.NAV_MONTH_REPORT}</Link>
              </Menu.Item>
            </Menu>
          </Header>

          {/* ---CONTENT--- */}
          <Content
            style={{
              marginTop: "20px",
              padding: "0 50px",
              border: "2px solid yellow",
            }}
          >
            <Row justify="center">
              <Switch>
                <Route exact path="/">
                  <Col span={16} style={{ border: "2px solid red" }}>
                    <ItemManagement />
                  </Col>
                </Route>
                <Route path="/list">
                  <Col span={16} style={{ border: "2px solid red" }}>
                    <ListItem />
                  </Col>
                </Route>
                <Route path="/month-report">
                  <Col span={24} style={{ border: "2px solid red" }}>
                    <MonthReport />
                  </Col>
                </Route>
              </Switch>
            </Row>
          </Content>

          {/* ---FOOTER--- */}
          <Footer style={{ textAlign: "center" }}>Made by a man</Footer>
        </Layout>
      </Router>
    </AuthenProvider>
  );
};

const AppWithAuth = withAuthenticator(App);

export default () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <AppWithAuth />
    </Rehydrated>
  </ApolloProvider>
);
