const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Users {
    username: String,
    id: ID,
    decks: String,
  },
  type Category {
    id: ID,
    name: String,
    decks: String,
    user: String,
  },
  type Decks {
    id: ID,
    cards: String,
    Name: String,
    Toggle: Boolean,
  },
  type Cards {
    id: ID,
    front: String,
    back: String,
    correct: Number,
    wrong: Number,
    deck: String,
    last: String,
  }
`;
 
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    get_cards: () => 'Hello world!',
    get_one_card: () => 'Hello world!',
    get_decks: () => 'Hello world!',
    get_one_deck: () => 'Hello world!',
  },
  Mutation: {
      edit_card: () => 'Hello Darkness',
      edit_deck: () => 'My old friend',
  }
};
 
const server = new ApolloServer({ typeDefs, resolvers });
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 8080 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);