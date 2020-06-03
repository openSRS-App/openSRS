const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Configure MongoDB server
const myURI = 'mongodb+srv://opensrs:OLAHl1NOiZ1mKDFD@cluster0-9tk0l.mongodb.net/test?retryWrites=true&w=majority';


mongoose.connect(myURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'openSRS' 
})
    .then(() => console.log('Connected to Mongo DB.')) 
    .catch(err => console.log(err)); 

// Card Schema
// ## Creates list of flashcards that is nested within the deck schema
// Relations in terms of nested object: User > Deck > Card

const cardSchema = new Schema ({
  id: {
    type: Number,
    require: true
  },
  front: {
    type: String,
    require: true
  },
  back: {
    type: String,
    require: true
  },
  correctCount: {
    type: Number,
    require: true
  },
  wrongCount: {
    type: Number,
    require: true
  }
})     
    
// Deck Schema
// ## Creates a deck that is nested within the user schema
// Relations in terms of nested object: User > Deck > Card

const deckSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  cards: {
    type: cardSchema,
    require: true    
  }
});

// User Schema ==>  Parent Object
// ## This will create our user (w/ its assoc. info) and decks (w/ its assoc cards)  
// ## userSchema's decks will reference the deckSchema (where cards references cardSchema to make cards)

const userSchema = new Schema({
  id: {
        type: Number,
        require: true
      },
  username: {
      type: String,
      require: true
      },
  password: {
      type: String,
      require: true
      },
  lastVisit: {
      type: Date,
      require: true
      },
  decks:
        deckSchema
});
     
const Users = mongoose.model('Users', userSchema);
const Decks = mongoose.model('Decks', deckSchema);
const Cards = mongoose.model('Cards', cardSchema);

module.exports = {Users, Decks, Cards};
