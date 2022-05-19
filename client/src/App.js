import './App.css';
import {
  ApolloClient,          // use to create provider
  InMemoryCache,         // to have caching in our application (stores the results of your GraphQL queries in a local, normalized, in-memory cache)
  ApolloProvider,        // use to connect Apollo Client to react
  HttpLink,              // sends a GraphQL operation to a remote endpoint over HTTP
  from,                  // allow to build a connect to our api
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";  // to catch errors
import GetContacts from './Components/GetContacts';

// to specify the error with message
const errorLink = onError(({ graphqlErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message}) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,           // use to catch GraphQL errors, if occurs
  new HttpLink({ uri: "http://localhost:6969/graphql" }),
]);

// make an instance of ApolloClient to determine the connection is correct or not
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});


function App() {
  return (
    <ApolloProvider client={client}>  {/* to reach all the graphql api */} 
      {" "}
      <GetContacts/>                  {/* rendering GetContacts.js inside App.js */} 
    </ApolloProvider>
  );
}

export default App;
