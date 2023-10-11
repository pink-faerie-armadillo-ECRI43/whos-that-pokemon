const mongoose = require('mongoose');
// require('dotenv').config();

// const mongoString = process.env.DATABASE_URL;
const mongoString =
  'mongodb+srv://hsweat:Ih1qfs1XX5lylqix@cluster0.mfqqgp1.mongodb.net/?retryWrites=true&w=majority';


const uri = mongoString;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const Schema = mongoose.Schema;

//Mongoose schema for pokemon data with fields for name and imageURL
const pokemonSchema = new Schema({
  name: String,
  imageURL: String,
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
