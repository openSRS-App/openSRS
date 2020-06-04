
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

module.exports = resolvers;