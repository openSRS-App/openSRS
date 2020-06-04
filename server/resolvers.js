
const Models = require('./models')

const User = Models.User
const Deck = Models.Deck
const Card = Models.Card
// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
    //   users: (userId) => User.findById({id: userId}),
      get_one_card: () => 'Hello world!',
      get_decks: () => 'Hello world!',
      get_one_deck: () => 'Hello world!',
    },
    Mutation: {
        edit_card: () => 'model.create(card',
        edit_deck: () => 'My old friend',
    }
  };

module.exports = resolvers