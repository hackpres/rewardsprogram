import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import './index.css';
import App from './App';


// const httpLink = new HttpLink({
//   uri: '/graphql'
// });
// const authLink = setContext((_, { headers }) => {
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers
//     },
//   };
// });
const client = new ApolloClient({
  // link: httpLink,
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
