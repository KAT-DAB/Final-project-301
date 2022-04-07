'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');
// const getRestaurants = require('./routes/Yelp.js');
// const postRestaurants = require('./routes/YelpPost.js');

const postData = require('./routes/DataSchema.js');




mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.get('/restaurants', getRestaurants);
app.get('/savedRestaurants', getSavedRestaurants);
app.post('/restaurants', postRestaurants);
app.delete('/restaurants/:id', deleteRestaurants);
app.put('/restaurants/:id', updateRestaurants);


async function getRestaurants(request, response) {

  let myCity = request.query.location;
  let myFood = request.query.term;

  let url = `https://api.yelp.com/v3/businesses/search?&limit=15&term=${myFood}&location=${myCity}&apiKey=${process.env.apiKey}`;
  console.log(url);
  let foodData = await axios.get(url, {
    headers: {
      'Authorization': `Bearer ${process.env.apiKey}`
    }
  });
  // let stuff = new RestaurantData(foodData.data); 
  let stuffData = foodData.data.businesses.map(places => {
    return new RestaurantData(places);

  })

 response.send(stuffData);
}



async function postRestaurants(request, response) {
  let dataToPost = await postData.create(request.body);
  response.send(dataToPost);
}


async function deleteRestaurants(request, response){
  let id = request.params.id;
  console.log(id);
    await postData.findByIdAndDelete(id);
    response.send('book deleted');
    
  } 

  async function updateRestaurants(request, response){
    let id = request.params.id;
    let resUpdated = await postData.findByIdAndUpdate(id, request.body, { new: true, overwrite: true});
    response.send(resUpdated);
  }

  async function getSavedRestaurants(req, res, next) {
    try {
      
      let queryObject = {};
      
      let results = await postData.find(queryObject);
      res.status(200).send(results);
    } catch(error) {
      next(error)
    }
  }







class RestaurantData {
  constructor(restaurants) {
    this.name = restaurants.name;
    this.rating = restaurants.rating;
    this.address1 = restaurants.location.address1;
    this.city = restaurants.location.city;
    this.image_url = restaurants.image_url;
    this.state = restaurants.location.state;
    this.zip_code = restaurants.location.zip_code;
    this.notes = '';
  }
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));