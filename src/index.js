import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";
import { ApolloProvider } from "react-apollo";
import awsconfig from "./aws-exports";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_project_region,
  auth: {
    type: awsconfig.aws_appsync_authenticationType,
    apiKey: awsconfig.aws_appsync_apiKey,
    // jwtToken: async () => token, // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
