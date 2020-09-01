import React, { useContext } from "react";
import { Input } from 'antd';
import { searchListProperty } from "../../../graphql/customQuery";
import gql from "graphql-tag";
import { ApolloProvider, ApolloContext } from "react-apollo";

const { Search } = Input;

const FIND_PROPERTY = "Tìm kiếm đồ";
const FIND_BUTTON = "Tìm kiếm";

export default function(props) {
  const {client} = useContext(ApolloContext);

  client
    .query({
      query: gql(searchListProperty),
      variables: {searchQuery: 'dsa'}
    })
    .then(({ data: { listPropertys } }) => {
      console.log(listPropertys.items);
    }); 
  return (
    <div>
      <Search
      placeholder={FIND_PROPERTY}
      enterButton={FIND_BUTTON}
      size="large"
      onSearch={value => console.log(value)}
    />
    </div>
  )
}