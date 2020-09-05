import { API, graphqlOperation } from "aws-amplify";
import { createProperty, updateProperty } from "../../graphql/mutations";

export async function create(item) {
  console.log('--function create-> ', item);
  const result = await API.graphql(graphqlOperation(createProperty, { input: item }));
  console.log('return value from "create" -> ', result);
}

export async function update(item) {
  console.log('function update in service', item);
  const result = await API.graphql(graphqlOperation(updateProperty, {input: item}));
  console.log('return value from "update" -> ', result);
}