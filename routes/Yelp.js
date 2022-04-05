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
  
    let url = `https://api.yelp.com/v3/businesses/search?term=${myFood}&location=${myCity}&apiKey=${process.env.apiKey}`;
    console.log(url);  
    let foodData = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${process.env.apiKey}`
      }
    });
  // let stuff = new RestaurantData(foodData.data); 
  console.log('first business name: ', foodData.data.businesses[0].name); 
  // console.log(foodData.data.businesses, '.businesses'); WORKS
  // console.log(foodData.data.businesses); 
  response.send(foodData.data);
  // response.send(stuff); 
}

// class RestaurantData {
//   constructor (restaurants){ 
//     this.businesses = restaurants.data.businesses[0].name;
//     this.rating = restaurants.data.businesses[0].rating;
//     this.address1 = restaurants.data.businesses[0].location.address1; 
//     this.city = restaurants.data.businesses[0].location.city; 
//   }
// }


module.exports = getRestaurants;



