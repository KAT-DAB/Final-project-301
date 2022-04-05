// 'use strict';
// const axios = require('axios');
// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const postData = require('./routes/DataSchema.js');

// mongoose.connect(process.env.DB_URL);

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   console.log('Mongoose is connected');
// });

// const app = express();
// app.use(cors());
// app.use(express.json());



// async function postRestaurants(request, response) {

//   // let myCity = request.query.location; 
//   // let myFood= request.query.term;

//   // let url = `https://api.yelp.com/v3/businesses/search?&limit=5&term=${myFood}&location=${myCity}&apiKey=${process.env.apiKey}`;
//   // console.log(url);  
//   let foodData = await postData.create(request.body);
    
//   //   url, {
//   //   headers: {
//   //     'Authorization': `Bearer ${process.env.apiKey}`
//   //   }
//   // });
// //  let stuff = foodData.data; 
// // let stuffData = foodData.data.businesses.map(places => {
// // return new RestaurantData(places);

// // })
// console.log(foodData);



// response.send(foodData);
// }

// module.exports = postRestaurants;