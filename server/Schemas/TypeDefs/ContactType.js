const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

// define the type of the contact 
const ContactType = new GraphQLObjectType({
  name: "Contact",
  fields: () => ({
    name: { type: GraphQLString },
    phone: { type: GraphQLString }
  }),
});

module.exports = ContactType;