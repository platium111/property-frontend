import React, { useContext, useState, useEffect } from 'react';
import { Input } from 'antd';
import { searchListCustomer } from '../../../graphql/customQuery';
import gql from 'graphql-tag';
import { ApolloContext } from 'react-apollo';
import { CustomerTable } from '../../../components/CustomerTable';
import EditCustomer from '../Customer';
import { RepaymentTable } from '../../RepaymentForms';

const { Search } = Input;

const FIND_CUSTOMER = 'Tìm kiếm khách hàng';
const FIND_BUTTON = 'Tìm kiếm';

async function findCustomers(client, text) {
  const queryResult = await client.query({
    query: gql(searchListCustomer),
    variables: { searchQuery: text },
  });

  const {
    data: { listCustomers },
  } = queryResult;

  console.log('found items:', queryResult);
  return listCustomers?.items;
}

export default function (props) {
  const { client } = useContext(ApolloContext);
  const [searchText, setSearchText] = useState();
  const [foundCustomers, setFoundCustomers] = useState([]);
  const [displayDetailItem, setDisplayDetailItem] = useState(false);
  const [displayType, setDisplayType] = useState();
  const [customerSelected, setCustomerSelected] = useState();

  // TODO after update, if not change search query, data looks the same but actually updated in aws
  useEffect(() => {
    const searchTextFn = async () => {
      const items = await findCustomers(client, searchText);
      setFoundCustomers(items);
    };

    if (searchText && searchText.length >= 3) {
      searchTextFn();
    }
  }, [searchText, client]);
  debugger;
  return (
    <div>
      <Search
        placeholder={FIND_CUSTOMER}
        enterButton={FIND_BUTTON}
        size="large"
        onSearch={async (value) => {
          setSearchText(value);
          setDisplayDetailItem(false);
        }}
      />
      <CustomerTable
        searchText={searchText}
        displayType={displayType}
        setDisplayType={setDisplayType}
        setCustomerSelected={setCustomerSelected}
      />

      {customerSelected && displayType === 'edit' && <EditCustomer {...customerSelected} />}
      {displayType === 'repayment' && <RepaymentTable customerId={customerSelected.id} name="repayments" />}
    </div>
  );
}
