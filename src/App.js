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

axios.interceptors.request.use((config) => {
  config.timeout = 50000;
});

const { Header, Footer, Content } = Layout;
Amplify.configure(awsconfig);

function App() {
  return (
    <AuthenProvider>
      <AmplifySignOut />
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/">Tạo mới</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/list">Liệt kê</Link>
              </Menu.Item>
            </Menu>
          </Header>

          <Content style={{ marginTop: "20px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Tạo mới</Breadcrumb.Item>
              <Breadcrumb.Item>Liệt kê</Breadcrumb.Item>
            </Breadcrumb>

            <div className="site-layout-content">
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
            </div>
          </Content>

          <Footer style={{ textAlign: "center" }}>Made by a man</Footer>
        </Layout>
      </Router>
    </AuthenProvider>
  );
}

export default withAuthenticator(App);
