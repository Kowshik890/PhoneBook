const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors())

const PORT = 6969;

// to create a graphql server
const { graphqlHTTP } = require('express-graphql');
const schema = require("./Schemas/index");

app.use(
  "/graphql",         // able to access data through this route
  graphqlHTTP({       // the route is applied on graphqlHTTP
    schema,           // query of fetching all data
    graphiql: true,   // GUI for visualize the queries and data
  })
);

app.listen(PORT, () => {
  console.log("Server running");
});