8/8/2020

- use `formik-ant` and get errors with <Input as="select"> => `as` from Formik but actually when we import `Input` from `formik-ant`, it will use component
  from ant instead -> inside select has options will throw errors because `Input` doesnt have children in ant -> import `Select`

20/8/2020

- [env] cannot get process.env even though having some data in env file
  -> go to documentation about react-script -> start with REACT*APP*

- [iam]
  C:\Users\Clark\.aws\credentials
  I use serverless-admin. admin is lost
  -> aws console | go to app amplify in aws
  name: propertyapp
  -> choose option so simple -> not enhanced config
  https://docs.amplify.aws/start/getting-started/setup/q/integration/react

21/8/2020

- fixing errors with lastTimeStamp by remove everything `amplify delete` and create new `amplify init`
- Work with graphql -> change table so easy
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

- Not using antd upload -> using normal upload by fixing errors of files upload in input

24/8/2020

- Upload multiple files
- display multiple files
- display debug values in formik

25/8/2020

- Refactoring upload file
- create grapql query mutation for property
- react form can get data and put in graphql
- update graphql schema to have few fields
- Build gallery view component to display list of images

26/8/2020

- Create layout
- Have navigation bar with react router

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
- [enable_datastore_for_entire_api] disable it, if not return error \_version

1/9/2020

- aws appsync also use apollo client
  so we can read documentation and see how queries work
- getting better with advanced queries with `filter` as a parameter and the way to pass argument in query
- good way is using `Queries` in Amazon, can get value immediately and good UI

* [cannot_filter] use filter in aws appsync not by pass parameter, need to follow what appsync expected

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

- need to explicit declare properties in graphql
- cannot use async await in render, easy to get errors when use map to render component

* [fetch_image_useEffect] has one another function with asyn await -> can do await ro fetch image and setUrl by set value for it

3/9/2020

- after submit, images can be displayed and the next time, it will be new images

- [TODO_textarea] cannot reset value using formik, even using <Field>

4/9/2020

- `span` to define length of COl
- need to have `Row` contains `Col` to have columns style which applies span

* [beginsWith_contains] cannot get correct data with `contains` -> so use `beginsWith`
* [unmount_react] believe in debug console log error -> see useEffect with [property] -> do we need property? -> result is not because it always render one time.
  Errors because it is one item in map

5/9/2020

- fixing add and update property
- configure in aws which only allows to have admin register

7/9/2020

- Update few more fields in schema -> need to `amplify push` and change schema
- Input, Select, TextArea components which includes Label
- useField hooks which is a bit tricky, need to use middle components, after normal input
- introduce useCondition with mathjs, dot library

8/9/2020

- [authorization_in_aws] also need to login cognito in aws appsync
- [authorization_apollo_search] in front end, 7 days it will out of session, so using jwtToken in AWSAppSyncClient
- [modal_not_defined] after delete modal, need to update query

9/9/2020

- Update schema for Customer include many other models

10/9/2020

- [auto_generate_id] using util.autoId() in vtl file
- [fixing-nested_object_graphql] it generated code by modal which can see nested object but actually follow Modal which defines input. We can see that modal in aws. See CreateCustomerInput
  If Customer has Address, so Address needs to add first then get Id and use for Customer

* I work with one-t0-many by just using @connnection with name
* when we add nested object just add [id~from aws] which is in `schema` -> but when we get result it will have full nested object
  [reference](https://github.com/mikeparisstuff/amplify-cli-nested-api-sample/blob/master/amplify/backend/api/amplifynestedsample/schema.graphql)

12/9/2020

- [one_to_many] with Blog and Post, one to many
  Post just need to have postBlogId in mutation
  When we query Blog, it will return `posts` items
  [reference] (https://docs.amplify.aws/cli/graphql-transformer/overview#test-the-api)

- [subSelectionRequired] errors in list query which has nested object but haven't set it

- [children_parent] if in parent we have

```
<RepeatingGroup>
  {(item, index) => {
    ...something
  }}
</RepeatingGroup>

inside RepeatingGroup component
items.map ...<div>
  {children(item, index)}
</div>

* if parent has arary of children
React.cloneElement only work if parent has 1 children, otherwise using this
`React.Children.toArray(children)`
```

- [too_many_effect] should not update too many state value in one effect. Sometimes has error looping state -> separate and have dependency

- [useCondition_showHide] should not pass another props from parent to children, if we use `values` and `condition` to know `showHide` status, we should pass the `condition`. That's it. Don't make the mess code

- [Component_null] it is not tenary operator -> it is just logic in somewhere of hook component

15/9/2020

- [error_datepicker] using ant datepicker is a bit tricky when select value because

* `defaultValue` onChange -> using `setFieldValue` to update formik but don't pass `value` as props to `DatePicker`, because that value will have wrong format somehow? -> don't pass value in]

18/9/2020

- using `let inputRef = useRef()` -> pass `<Input ref={inputRef}>

- using `react-input-mask` having mask functionality
  [link]https://stackoverflow.com/questions/57191028/using-react-input-mask-with-formik-and-formik-antd

19/9/2020

- done react mask and currency
- [add_domain]
  buy domain -> create hosted App in `Amazon route 54` -> add 4 name server to domain management
  -> Go to `domain management` then add domain and point to different cloud env such as `dev` or `prod`
- [add_subdomain] also in `domain management` -> add subdomain
- [new_prod_env] step new env
  amplify env add -> No current env -> amplify push -> amplify publish
- merging new feature env to dev
  amplify env checkout dev (current is feature)
  [reference](https://read.acloud.guru/multiple-serverless-environments-with-aws-amplify-344759e1be08#:~:text=Create%20a%20new%20Amplify%20project,service%20in%20our%20AWS%20account)

- [moving_env_with_frontend] when changing env -> will restart react front end and get correct config for it to run for login

- [fixing_SUBMIT] if see something relate to define schema error for example, `gpa, input type is null`, meaning that we defined mandatory in schema but not have in create() in graphql

20/9/2020

- [list_graphql] getting errors if don't declare nested object inside nested object

listCustomer has `items` -> inside items has `properties` -> inside it has `customer` -> need declar `customer {id}`

22/9/2020

- [another_way_1toN]
  Customer has `properties` -> has connection with keyName + fields
  Property has `customerId` and has @key with `name` equals `keyName` and `fields` has `customerId` and another properties of table ~ (both consider as secondary index)

-> another way: both of them has @connection(name: "sameName") -> but this way has automatic ID is generated
Customer will have `customerAddressId` and Property will have `propertyCustomerId`

- [1to1]
  Customer has one `address` has @connection with only fields["id"] + addressId as another properties of table
  in Address has nothing relating to customer

- [error_get_nested_obj_graphql]
  Customer has Property but default dont get any Property, we add in default query which will be removed after codegen -> just create new query and copy the same then put more properties in Property inside Customer

23/9/2020
Regular expression

/cat/g

- `g` ~ `match all` means searching for all results
  if text has 2 cat -> it will get 2 cat
- `i` ~ `case sensitive`

/a+/g | a or more than one a

- `+ one or more`

/er?/g | after e is r, so r is optional

- `? is optional` -> result e, ee, er

/er\*/g | can have or more at end

- `* is 0 or more` -> result e, er, err

/.at/g

- `. is anything` -> result fat, sat

/\./g

- `\. meaning find dot`

/.\./g | result t., a.

/\w/g | word

- `\w is matching word character`

/\s/g | white space

/\W/g | not word
/\S/g | not space

/\w{4} | find 4 character

- `{4} is finding 4 characters`
- `{4,} is 4 or more`
- `{4,6} is 4 or 5 or 6`

/[fa]at/g

- `[fa] meaning f or a` -> result fat, aat

/[a-z]at/g

- `[a-z] meaning from a to z`
- `[a-zA-Z]`

24/9/2020
/(t|T)ha/g | result tha, Tha

- `() ~ create own group` can combine with other outside
- compare to /t|The/g -> result t or The

/(t|r|k){2,3}/g -> return tkrab, trkbhu

/^Y/g

- `^ ~ beginning`

/\.\$/g

- `$ ~ end of line`

/(?<=[t|T]he)./g | . is find anything ->
example `the one who got the dog is` -> return space following the

/(?!=[t|T]he)./g || not follow by -> find remaining

- `?!= meaning not that follow`

/.(?=[t|T]he)./g | return any one character before `the`

- `?= ~ look ahead`
- `?! ~ meaning remaining look ahead`

vd phone number
/\d{10}/g - 1234567890
/(?<code>\d{3})[ -]?(\d{3})[ -]?\(d{4})/g - 123-456-7890

/\(?(?<code>\d{3})\)?[ -]?(\d{3})[ -]?\(d{4})/g - (123) 456-7890

/(?:(\+1)[ -])\(?(?<code>\d{3})\)?[ -]?(\d{3})[ -]?\(d{4})/g - +1 123 456 7890

- `?: mean no longer belong to group`

25/9/2020

- [customer_resolver] add Query {//new here} and also has `type X` to define as modal for data
  -> update in `stacks` package of amplify -> will update resources file to point to vtl file
  -> write `vtl` file
  -> create lambda function

27/9/2020

- [remove_emplify] `amplify function remove`

28/9/2020

- Having Cell with actions such as delete, edit
- New `Button` component
- Dynamic import with hook

29/9/2020

- [Writing_custom_cell] write edit and delete button in cell in `columns`
- integrating with router for click in to Edit and show Customer

30/9/2020

- Remove routing for just Customer Table and display edit customer detail -> not need -> just need normal react

- [fix_date_picker] because in edit mode, we need to pass value, so set value for datepicker as a prop

- [fix_cell_recognise_id] when choosing Edit in each row, need to custom cell by using useTable with passing column in there, so we can have the same file in CustomerTable, so can handle edit and pass data
  [ref](https://codesandbox.io/s/github/tannerlinsley/react-table/tree/master/examples/row-selection?file=/src/App.js)

- [fix_initialise_value_formik] using `enableReinitialize` in prop to change value in initialize value

2/10/2020

- fix few field to get value from initialising

3/10 -> 12/10/2020
Focusing on youtube analytic and Cracking English everyday

13/10/2020

- delete data from data, using await in onDelete

16/10/2020

- [e_only_add_one_property] why only can submit one properties? -> giayTo is not working. it is because giayTo doesn't have itemName in input. We need to have because using one-to-many with second global index which includes 2 keys

- cannot have 2 same name in the form
- fix loanType and type wrong when having loanType in customer -> we moved to properties.

17/10/2020

- refactor Customer with `actions` and fix error
- refactor mother, father name and phone
- done displaying message | when submission data returned -> setdata as a state, then display message based on that

24/10/2020

- fix errors in update non-editable data
  -> have value in local -> when update that value because of onBlur -> updateMyData -> rerender -> all good on onBlur
  but need to update calculated data such as tienMat, doThucTe
  -> need depend on value to updateMyData -> useEffect here

- add row feature
  because data is passed through useTable -> get latest from here and add to data

28/10/2020

- remove mock data
- refactor month utils

30/10/2020

- feat: search text in customers
- [e_not_passing_full_variable_props] <Customer searchText> -> is is boolean value

1/11/2020

- [e_fixing_customer] DB Condition Check error -> fix by checking mandatory condtion, when we pass data to update db
  second is id is missed when click on a customer to edit

- todo: need to fix update property, order of property changed -> so errors here

6/11/2020

- [e_editgrid_data_when_editting_in_property] need to pass value from props into component
- [e_fix_price_and_interest] need to fix inside FieldInput value, passsing value into mask value

9/11/2020

- add day report
- Using table from ant

10/11/2020

- [e_selectInRepeatingGroup] using sortProperties, so when it is null -> passing null to editgrid -> before I used in initializeValue, so I forgot

- setup RepaymentTable for repayments

11/11/2020

- using withFormik
- Add Checkbox component
- RepaymentTable component
- Working with Table, Column in ant
- [e_changing_graphql_schema] usually get this error
  `Attempting to add and remove a global secondary index at the same time on the`
  -> need to remove table in graphql and remove connection
  -> add again

16/11/2020

- Batch custom query, resolver from multiple table
  create Query, Mutation in .graphql -> based on function name inside those, it will generate this function in Mutation or Queries in package code of react -> then generate `resolvers` in build -> can override name to custom that resolver

17/11/2020

- BIG SUCCESS with custom resolver.

1. in .graphql file, create Query, Mutation depend on what you want. Note: `input` is the type defined for input paramenter in graphql function. it will generate function in `queries` or `mutation` in react. This will define for mapping data from server
2. in api/propertyApp/resolvers : create Mutation.batchUpdateCustomerWithChildren.req.vtl and also create one for response -> it will override in `build`
   Note: there are different type of way to write req and res which includes dynamodb or lambda.
   For `dynamodb`, we have UpdateItem, PutItem, UpdateItem...
   [ref_req] https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference-dynamodb.html#aws-appsync-resolver-mapping-template-reference-dynamodb-putitem
3. .req.vtl and res.vtl are put in `stacks/CustomResources.json`, it will map with which table used.

18/11/2020

- one to one need to add A, then add B -> then update A
- one to many doesn't need to care about A, only add B then add id of A to B

20/11/2020

- [fix_cannot_add_editgrid] formikProps?.values?.properties, get from formikProps is the latest data which has a new data, so will render new components

27/11/2020

- refactor update, create for customer and children
- Fixing addressId, contractId...
- Have mapping using HandlerBar

30/11/2020

- [fix_area_update_value] because we get value from props, overriding in useFieldValue, just remove it
- [fix_searchContract] remove unnecessary properties returned

3/1/2020
- [fix_add_new_repeatinggroup_defaultvalue] pass props with value as `defaultValues` for repeating group -> set this value in the new row
