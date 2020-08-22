8/8/2020
- use `formik-ant` and get errors with <Input as="select"> => `as` from Formik but actually when we import `Input` from `formik-ant`, it will use component
from ant instead -> inside select has options will throw errors because `Input` doesnt have children in ant -> import `Select`

20/8/2020
-[env] cannot get process.env even though having some data in env file
-> go to documentation about react-script -> start with REACT_APP_

-[iam]
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

