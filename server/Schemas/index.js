const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
} = graphql;

const allContacts = require("../telefonbuch.json");

const ContactType = require("./TypeDefs/ContactType");

// to create the type of a contact
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {                             
    getAllContacts: {                    // a single query which returns all contacts as list
      type: new GraphQLList(ContactType),
      resolve() {
        return allContacts;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery});   // returning query who import this