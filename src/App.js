import React, { useContext } from 'react';
import './App.css';
import ItemManagement from './forms/ItemManagement/Property/index';
import 'antd/dist/antd.css';
import { Layout, Row, Col, Menu } from 'antd';
import { AuthenProvider, store } from './context/index';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ListItem from './forms/ItemManagement/ListItem/index';
import CreateCustomer from './forms/CustomerManagement/Customer/index';
import ListCustomer from './forms/CustomerManagement/ListCustomer/index';
import MonthReport from './forms/MonthReport';
import DayReport from './forms/DayReport';
import { SITE } from './_constants/index';

import AWSAppSyncClient from 'aws-appsync';
import { ApolloProvider } from 'react-apollo';
import { Rehydrated } from 'aws-appsync-react';

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
    jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
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
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/">{SITE.NAV_CREATE_NEW_PROPERTY}</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/list-property">{SITE.NAV_FIND_PROPERTY}</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/create-customer">{SITE.NAV_CREATE_NEW_CUSTOMER}</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/list-customer">{SITE.NAV_FIND_CUSTOMER}</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/day-report">{SITE.NAV_DAY_REPORT}</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/month-report">{SITE.NAV_MONTH_REPORT}</Link>
              </Menu.Item>
            </Menu>
          </Header>

          {/* ---CONTENT--- */}
          <Content
            style={{
              marginTop: '20px',
              padding: '0 50px',
            }}
          >
            <Row justify="center">
              <Switch>
                <Route exact path="/">
                  <Col span={16}>
                    <ItemManagement />
                  </Col>
                </Route>
                <Route path="/list-property">
                  <Col span={16}>
                    <ListItem />
                  </Col>
                </Route>
                <Route path="/create-customer">
                  <Col span={16}>
                    <CreateCustomer />
                  </Col>
                </Route>
                <Route path="/list-customer">
                  <Col span={24}>
                    <ListCustomer />
                  </Col>
                </Route>
                <Route path="/day-report">
                  <Col span={16}>
                    <DayReport />
                  </Col>
                </Route>
                <Route path="/month-report">
                  <Col span={24}>
                    <MonthReport />
                  </Col>
                </Route>
              </Switch>
            </Row>
          </Content>

          {/* ---FOOTER--- */}
          <Footer style={{ textAlign: 'center' }}>Made by a man</Footer>
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
