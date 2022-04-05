'use strict';


const mongoose = require('mongoose');


const { Schema } = mongoose;



const dataSchema = new Schema({
  name: {type: String, required: true},
  rating: {type: String, required: true},
  address1: {type: String, required: true},
  city: {type: String, required: true}
});

const FoodModel = mongoose.model('DataSchema', dataSchema);

module.exports = FoodModel;