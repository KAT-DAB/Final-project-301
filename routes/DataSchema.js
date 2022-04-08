'use strict';


const mongoose = require('mongoose');


const { Schema } = mongoose;



const dataSchema = new Schema({
  name: {type: String, required: true},
  rating: {type: String},
  address1: {type: String, required: true},
  city: {type: String, required: true},
  image_url: {type: String, required: true},
  state: {type: String, required: true},
  zip_code: {type: String, required:true},
  notes: {type: String}
  });

const FoodModel = mongoose.model('DataSchema', dataSchema);

module.exports = FoodModel;