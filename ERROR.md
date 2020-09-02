8/8/2020
- use `formik-ant` and get errors with <Input as="select"> => `as` from Formik but actually when we import `Input` from `formik-ant`, it will use component
from ant instead -> inside select has options will throw errors because `Input` doesnt have children in ant -> import `Select`

20/8/2020
- [env] cannot get process.env even though having some data in env file
-> go to documentation about react-script -> start with REACT_APP_

- [iam]
C:\Users\Clark\.aws\credentials
I use serverless-admin. admin is lost
-> aws console | go to app amplify in aws
name: propertyapp
-> choose option so simple -> not enhanced config
https://docs.amplify.aws/start/getting-started/setup/q/integration/react

21/8/2020
+ fixing errors with lastTimeStamp by remove everything `amplify delete` and create new `amplify init`
+ Work with graphql -> change table so easy
it is AppSync in aws
using `amplify api console` 

22/8/2020
- `amplify api console` then choosing graphql or rest -> will see schema...
- `amplify codegen` created code for graphql
- [debug_test_graphql] `amplify mock api` -> see AppSync mock endpoint to configure graphql, so can write query with table of 3 cols
- [mapping_issue] propertyId in graphql but it is `id` in mongoDB 
-> go to resolvers/Mutation.createProperty.req.vtl to fix 
`$util.dynamodb.toDynamoDBJson(...)` 
https://docs.aws.amazon.com/appsync/latest/devguide/troubleshooting-and-common-mistakes.html
- change in mapping will restart mock api

mutation CreateProperty {
  createProperty(input: {describe: "hey hey", propertyId: 1,}) {
    createdAt
  }
}

23/8/2020
+ Not using antd upload -> using normal upload by fixing errors of files upload in input

24/8/2020
+ Upload multiple files
+ display multiple files
+ display debug values in formik

25/8/2020
+ Refactoring upload file
+ create grapql query mutation for property
+ react form can get data and put in graphql 
+ update graphql schema to have few fields
+ Build gallery view component to display list of images

26/8/2020
+ Create layout
+ Have navigation bar with react router

28/8/2020
- if running `amplify mock api`, when we add data to graphql, it will not add to mongodb in aws
- Change from `propertyId` to `id`
[decide-library] first time, I put in App.js, but makes errors
-> need to wrap in index.js which is in renderDOM.render() method. The best adivce is folowing documentation
-> actually no need for `react-apollo` because aws-appsync already setup
Whenever using library, it is dependent on that about config...

29/8/2020
- Only using aws amplify to do graphql
- Trying to fetch data from `queries`

30/8/2020
- Drawing architecture for aws api
- [enable_datastore_for_entire_api] disable it, if not return error _version

1/9/2020
+ aws appsync also use apollo client
so we can read documentation and see how queries work
+ getting better with advanced queries with `filter` as a parameter and the way to pass argument in query
+ good way is using `Queries` in Amazon, can get value immediately and good UI
- [cannot_filter] use filter in aws appsync not by pass parameter, need to follow what appsync expected

query MyQuery {
  listPropertys(filter: {itemName: {eq:"dsaa"}}) {
    items {
      itemName
    }
  }
}
-> using `variable` in client.query {query. variables: {...}}, see apollo doc

- [client_in_appsync_context] Provider from Apollo Provider has `client` -> so the way to get it in another component is through ApolloContext

2/9/2020
+ need to explicit declare properties in graphql
+ cannot use async await in render, easy to get errors when use map to render component

- [fetch_image_useEffect] has one another function with asyn await -> can do await ro fetch image and setUrl by set value for it
