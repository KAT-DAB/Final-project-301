'use strict';
const axios = require('axios');
require('dotenv').config();


// async function getTacos(request, response) {

//   let myCity = 'boston';
//   let myFoodType = 'tacos';

//   let url = `https://api.yelp.com/v3/businesses/search?term=${myFoodType}&location=${myCity}&apiKey=${process.env.apiKey}`
//   console.log(url);



//   let foodData = await axios.get(url, {
//     headers: {
//       'Authorization': `Bearer ${process.env.apiKey}`
//     }
//   });

async function getRestaurants(request, response) {

    let myCity = request.query.location; 
    let myFood= request.query.term;
  
    let url = `https://api.yelp.com/v3/businesses/search?&limit=5&term=${myFood}&location=${myCity}&apiKey=${process.env.apiKey}`;
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
console.log(stuffData);



  response.send(stuffData);
}

class RestaurantData {
  constructor (restaurants){ 
    this.name = restaurants.name;
    this.rating = restaurants.rating;
    this.address1 = restaurants.location.address1;
    this.city = restaurants.location.city;
  }
}


module.exports = getRestaurants;



