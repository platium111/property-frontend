import React from "react";
import "./App.css";
import ItemManagement from "./forms/ItemManagement";
import "antd/dist/antd.css";
import { Layout, Row, Col } from "antd";
import SignUp from "./components/authen/signup";
import Login from "./components/authen/login";
import { AuthenProvider, store } from "./context/index";
import Amplify, {API, graphqlOperation} from 'aws-amplify';
// import { AWS } from "@aws-amplify/core/lib/Facet";
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import axios from "axios";

axios.interceptors.request.use((config) => {
config.timeout = 50000;
});

const { Header, Footer, Content } = Layout;
Amplify.configure(awsconfig);

 function App() {
  const email = process.env.REACT_APP_EMAIL_AWS;
  const password = process.env.REACT_APP_PASSWORD_AWS;

  return (
    <AuthenProvider>
          <AmplifySignOut />
          <Layout>
            <Header>Smart Accounting</Header>
            <Content style={{ marginTop: "20px" }}>
              <Row justify="center">
                <Col span={12} style={{ border: "2px solid red" }}>
                  {/* <SignUp />
                  <Login email={email} password={password}/> */}
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
