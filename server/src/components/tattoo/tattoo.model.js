import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tattooSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  }
});

const Tattoo = mongoose.model('Tattoo', tattooSchema);

export default Tattoo;
