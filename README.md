# Phone Book App

## The purpose of this application is to view all contacts and search the phone book by name.
* React
* Material UI
* GraphQL
* Apollo Client

## Instruction for using the project

* For Server Side
  * npm init
  * npm install
  * npm install graph express-graphql
  * node index.js ( to run the app)

* For Client Side
  * npm install (if the following packages are not downloaded, then... )
  * npm i @apollo/client graphql 
  * npm i cors
  * npm i @mui/material @emotion/react @emotion/styled
  * npm i material-table @material-ui/core @material-ui/icons --save
  * npm i @mui/icons-material

* To access the data from "telefonbuch.json" file through GraphQL
  * Port: http://localhost:6969/graphql
  * Query:
  
     ```
          query {
              getAllUsers {
                name
                phone
             }
          }
     ```
     
* Screenshot
  * View all contacts (Name & Phone Number)
  
  [![1.png](https://i.postimg.cc/LXkmzBH0/1.png)](https://postimg.cc/623sKZ4d)
  
  * Search the phone book by name using a free text field (both lower and upper case)

  [![2.png](https://i.postimg.cc/gkCBW9y8/2.png)](https://postimg.cc/dL992xxV)

   
