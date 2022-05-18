# Phone Book App
## Instruction for using the project

* For Server Side
  * npm init
  * npm install
  * npm install graph express-graphql
  * node index.js ( to run the app)

* For Client Side
  * npm install
  if the following packages are not downloaded, then,
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
     
    
