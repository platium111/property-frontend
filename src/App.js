import React from "react";
import "./App.css";
import ItemManagement from "./forms/ItemManagement/NewItem/index";
import "antd/dist/antd.css";
import { Layout, Row, Col, Menu, Breadcrumb } from "antd";
import { AuthenProvider, store } from "./context/index";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Example from "./forms/ItemManagement/ListItem/index";
import { SITE } from "./_constants/index";
import { graphql, compose } from "react-apollo";
import {searchListProperty, listPropertys} from "./graphql/_custom/index";

axios.interceptors.request.use((config) => {
  config.timeout = 50000;
});

const { Header, Footer, Content } = Layout;
Amplify.configure(awsconfig);


const App = (props) => {
  console.log("--Go into App--", props);
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
              <Col span={12} style={{ border: "2px solid red" }}>
                <Switch>
                  <Route exact path="/">
                    <ItemManagement />
                  </Route>
                  <Route path="/list">
                    <Example />
                  </Route>
                </Switch>
              </Col>
            </Row>
          </Content>

          {/* ---FOOTER--- */}
          <Footer style={{ textAlign: "center" }}>Made by a man</Footer>
        </Layout>
      </Router>
    </AuthenProvider>
  );
};

export default withAuthenticator(
  compose(
    graphql(listPropertys, {
      options: (_) => ({
        fetchPolicy: "cache-and-network",
      }),
      props: (props) => ({
        onSearch: (searchQuery) => {
          return props.data.fetchMore({
            query: searchQuery === "" ? listPropertys : searchListProperty, // 10
            variables: {
              searchQuery,
            },
            updateQuery: (previousResult, { fetchMoreResult }) => ({
              ...previousResult,
              listPropertys: {
                ...previousResult.listPropertys,
                items: fetchMoreResult.listPropertys.items,
              },
            }),
          });
        },
        data: props.data,
      }),
    })
  )(App)
);
