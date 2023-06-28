const express = require('express');
const foodRoutes = require('./foodRoutes');

const app = express();

app.use('api', foodRoutes);

const request = require('request');
var query = '';
request.get({
  url: 'https://api.calorieninjas.com/v1/nutrition?query='+query,
  headers: {
    'X-Api-Key': 'CNINJA_API'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});

var formData = new FormData();
formData.append('file', $('#imagefile')[0].files[0]);
$.ajax({
    method: 'POST',
    url: 'https://api.calorieninjas.com/v1/imagetextnutrition',
    data: formData,
    enctype: 'multipart/form-data',
    processData: false,
    contentType: false, 
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText);
    }
});

const request = require('request');
var query = 'mushroom risotto';
request.get({
  url: 'https://api.calorieninjas.com/v1/recipe?query='+query,
  headers: {
    'X-Api-Key': 'CNINJA_API'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// const axios = require('axios');
// const fs = require('fs');

// async function uploadImageAndGetNutrition() {
//   try {
//     // Read the image file
//     const imageFile = fs.readFileSync('path/to/image.jpg');

//     // Create a new FormData object
//     const formData = new FormData();

//     // Append the image file to the FormData object
//     formData.append('file', imageFile);

//     // Make the HTTP POST request using axios
//     const response = await axios.post('https://api.calorieninjas.com/v1/imagetextnutrition', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         ...formData.getHeaders(),
//       },
//     });

//     // Log the response data (nutrition information)
//     console.log(response.data);
//   } catch (error) {
//     // Log and handle any errors that occur during the request
//     console.error('Error:', error.response.data);
//   }
// }

// // Call the function to initiate the image upload and nutrition retrieval process
// uploadImageAndGetNutrition();