const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Users {
    id: ID,
    username: String,
    decks: String,
  }

  type Decks {
    id: ID,
    cards: String,
    Name: String,
    Toggle: Boolean,
  }

  type Cards {
    id: ID,
    front: String,
    back: String,
    correct: Number,
    wrong: Number,
    deck: String,
    last: String,
  }

  type Query {
    users: [Users!]
    decks: [Decks!]
    cards: [Cards!]
  }

  type Mutation {
    addUser(username: String!): User
    deleteUser(id: ID!): User!
    updateUser(id: ID!): User!
    searchUser(searchTerm: String!): [User!]

    addDeck(id: ID!): Deck
    deleteDeck(id: ID!): Deck!
    updateDeck(id: ID!): Deck!
    searchDeck(searchTerm: String!): [Deck!]

    addCard(id: ID!): Card
    deleteCard(id: ID!): Card!
    updateCard(id: ID!): Card!
    searchCard(searchTerm: String!): [Card!]
  }
`;

module.exports = typeDefs