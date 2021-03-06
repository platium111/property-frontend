import { API, graphqlOperation } from 'aws-amplify';

export async function create(item, query) {
  console.log('--function create-> ', item);
  const result = await API.graphql(graphqlOperation(query, { input: item }));
  console.log('return value from "create" -> ', result);
  return result;
}

export async function update(item, query) {
  console.log('function update in service', item);
  const result = await API.graphql(graphqlOperation(query, { input: item }));
  console.log('return value from "update" -> ', result);
  return result;
}

export async function get(id, query) {
  console.log('get query');
  const result = await API.graphql(graphqlOperation(query, { id }));
  console.log('return value from get function -> ', result);
  return result;
}

export async function list(filter, query) {
  console.log('get list');
  const result = filter ? await API.graphql(graphqlOperation(query, { filter: filter })) : await API.graphql(graphqlOperation(query));
  console.log('return value from list function -> ', result);
  return result;
}

export async function remove(item, query) {
  console.log('remove query');
  const result = await API.graphql(graphqlOperation(query, { input: item }));
  console.log('return value from remove function -> ', result);
  return result;
}
