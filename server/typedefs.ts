const { gql } = require('apollo-server-express');

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

module.exports = typeDefs;