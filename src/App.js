import React from "react";
import "./App.css";
import ItemManagement from "./forms/ItemManagement/index";
import "antd/dist/antd.css";
import { Layout, Row, Col } from "antd";
import { AuthenProvider, store } from "./context/index";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import axios from "axios";

axios.interceptors.request.use((config) => {
config.timeout = 50000;
});

const { Header, Footer, Content } = Layout;
Amplify.configure(awsconfig);

 function App() {
  return (
    <AuthenProvider>
          <AmplifySignOut />
          <Layout>
            <Header>Smart Accounting</Header>
            <Content style={{ marginTop: "20px" }}>
              <Row justify="center">
                <Col span={12} style={{ border: "2px solid red" }}>
                  <ItemManagement />
                </Col>
              </Row>
            </Content>
            <Footer>Develop by a man</Footer>
          </Layout>
    </AuthenProvider>
  );
}

export default withAuthenticator(App);
