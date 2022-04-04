'use strict';
const axios = require('axios');
require('dotenv').config();


async function getTacos(request, response) {

  let myCity = 'boston';
  let myFoodType = 'tacos';

  let url = `https://api.yelp.com/v3/businesses/search?term=${myFoodType}&location=${myCity}&apiKey=${process.env.apiKey}`
  console.log(url);



  let foodData = await axios.get(url, {
    headers: {
      'Authorization': `Bearer ${process.env.apiKey}`
    }
  });

  response.send(foodData.data);




}
module.exports = getTacos;
