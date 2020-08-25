import { API, graphqlOperation } from "aws-amplify";
import { createProperty } from "../../graphql/mutations";

export async function create(item) {
  console.log('--function create-> ', item);
  const result = await API.graphql(graphqlOperation(createProperty, { input: item }));
  console.log('return value from "create" -> ', result);
}