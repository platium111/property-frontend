import React, { useContext, useState } from "react";
import { Input } from "antd";
import { searchListProperty } from "../../../graphql/customQuery";
import gql from "graphql-tag";
import { ApolloContext } from "react-apollo";
import PropertyCards from "../../../components/propertyCards/index";

const { Search } = Input;

const FIND_PROPERTY = "Tìm kiếm đồ";
const FIND_BUTTON = "Tìm kiếm";

async function findProperty(client, text) {
  const queryResult = await client.query({
    query: gql(searchListProperty),
    variables: { searchQuery: text },
  });

  const {
    data: { listPropertys },
  } = queryResult;
  return listPropertys?.items;
}

export default function (props) {
  const { client } = useContext(ApolloContext);
  const [foundProperties, setFoundProperties] = useState([]);

  return (
    <div>
      <Search
        placeholder={FIND_PROPERTY}
        enterButton={FIND_BUTTON}
        size="large"
        onSearch={async (value) => {
          const items = await findProperty(client, value);
          items && setFoundProperties(items);
        }}
      />

      <PropertyCards properties={foundProperties}/>
    </div>
  );
}
