
var geoArray = [];

// fetch( 'https://app.zipcodebase.com/api/v1/search?apikey=24d96260-3a7b-11ed-a18a-bf519b68c32f&codes=1060', {mode: 'cors', method: 'GET', })
//   .then(res => res.json())
//   .then(data => console.log(data))
//   // .then(data => geoArray.push(data))
//   .catch(error => console.log('ERROR'));

// fetch( 'https://app.zipcodebase.com/api/v1/search?apikey=24d96260-3a7b-11ed-a18a-bf519b68c32f&codes=1060', {
//   mode: 'cors', 
//   method: 'GET', 
//   headers: {'Content-Type': 'application/json'},
//   // body: JSON.stringify({})
// })
//   .then(res => {return res.json()})
//   .then(data => console.log(data))
//   .catch(error => console.log('ERROR'));


// Callback

// function getData(url, cb) {
//   fetch('https://app.zipcodebase.com/api/v1/search?apikey=24d96260-3a7b-11ed-a18a-bf519b68c32f&codes=1060')
//     .then(response => response.json())
//     .then(result => cb(result));
// }

// getData('https://app.zipcodebase.com/api/v1/search?apikey=24d96260-3a7b-11ed-a18a-bf519b68c32f&codes=1060', (data) => console.log({ data }))

// ///*///Async/Await

// My function

// const myfunction = async function(x, y) {
//   return [
//     x,
//     y,
//   ];
// }

// // Start function
// const start = async function(a, b) {
//   const result = await myfunction('test', 'test');
  
//   console.log(result);
// }

// // Call start
// start();



// ////////////////

async function getData(url) {
  fetch('https://app.zipcodebase.com/api/v1/search?apikey=24d96260-3a7b-11ed-a18a-bf519b68c32f&codes=1060');
  
}

// Here we wait for the myfunction to finish
// and then returns a promise that'll be waited for aswell
// It's useless to wait the myfunction to finish before to return
// we can simply returns a promise that will be resolved later

// Also point that we don't use async keyword on the function because
// we can simply returns the promise returned by myfunction
function start() {
  return getData();
}

// Call start
(async() => {
  console.log('before start');

  await start();
  
  console.log('after start');
})();


///////////////////


// async function getData(url) {
//   const response = await fetch('https://app.zipcodebase.com/api/v1/search?apikey=24d96260-3a7b-11ed-a18a-bf519b68c32f&codes=1060');

//   return response.json();
// };

// const data = await getData('https://app.zipcodebase.com/api/v1/search?apikey=24d96260-3a7b-11ed-a18a-bf519b68c32f&codes=1060');

// console.log({ data })

// console.log(geoArray);

// 

//logic: the array seems to have the following structure:
//I need to find the way to access the below information

// var geoArrayFull = [ {0:{
//                       query:{

//                       },
//                       results: {1060:[0:{city: Caracas,
//                                          country_code:VE,
//                                          latitude: X,
//                                          longitude: Y,
//                                          state:
//                                           },
//                                       1:{},
//                                       2:{}
//                                       ]
//                       },
//                     }, 
//                   } ];



// set a default value for all the target classes in the html. 

// let geoArrayDefault = geoArray.method to extract the below values.
      //Information
        // Street,
        // city:
        // State
        // country_code:
      //link to map
        //map

//Paste the link to the map to the iframe, or do I need to use another API to extract the iframe (like
//putting the latitude/longitude in google maps and pull out images?

//Target each span class with the array's information.

// document.getElementById('button-group-box').addEventListener('click', function(event) {

// Check if post code is valid

//     if valid

//       // var geoArrayFilter = geoArray.method to extract the below values.

//       //Information
//         // Street,
//         // City,
//         // State
//         // Country
//       //link to map
//         //map

//     else
//       document.getElementById('zip-code').addEventListener('click', function (event) {
//         //reset content of zip code
//       });