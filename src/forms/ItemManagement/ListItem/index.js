import React, { useContext, useState } from "react";
import { Input } from "antd";
import { searchListProperty } from "../../../graphql/customQuery";
import { listPropertys } from "../../../graphql/queries";
import gql from "graphql-tag";
import { ApolloContext } from "react-apollo";
import PropertyCards from "../../../components/propertyCards/index";
import EditItem from "../Property";
import {PROPERTY_STATUS} from "../Property/Property";

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

  console.log("found items:", queryResult);
  return listPropertys?.items;
}

export default function (props) {
  const { client } = useContext(ApolloContext);
  const [foundProperties, setFoundProperties] = useState([]);
  const [displayDetailItem, setDisplayDetailItem] = useState(false);
  const [clickedPropertyId, setClickedPropertyId] = useState();

  const clickedProperty = foundProperties.find(property => property.id === clickedPropertyId);

  return (
    <div>
      <Search
            placeholder={FIND_PROPERTY}
            enterButton={FIND_BUTTON}
            size="large"
            onSearch={async (value) => {
              const items = await findProperty(client, value);
              items && setFoundProperties(items);
              setDisplayDetailItem(false)
            }}
          />
      {/* Display list or detail cards */}
      {displayDetailItem ? (
        <EditItem property={{...clickedProperty, status: PROPERTY_STATUS.edit}} />
      ) : (
        <>
          <PropertyCards
            properties={foundProperties}
            setClickedPropertyId={setClickedPropertyId}
            setDisplayDetailItem={setDisplayDetailItem}
          />
        </>
      )}
    </div>
  );
}
