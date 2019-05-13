import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const geoLocationSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  }
});

const centerSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  geoLocation: {
    type: geoLocationSchema,
    required: true
  },
  isCurrent: {
    type: Boolean
  }
});

const Center = mongoose.model('Center', centerSchema);

export default Center;
