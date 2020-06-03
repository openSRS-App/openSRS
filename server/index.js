const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers });
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 8080 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);