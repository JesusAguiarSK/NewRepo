// Callback

var address = 'https://app.zipcodebase.com/api/v1/search?apikey=24d96260-3a7b-11ed-a18a-bf519b68c32f&codes=1060';

function getData(url, cb) {
  fetch(address)
    .then(response => response.json())
    .then(result => cb(result))
    .catch(error => console.log('ERROR'))
}

getData(address, (data) => console.log({ data }))

////////////////////////////

let jsondata;    
fetch(url).then(
        function(u){ return u.json();}
      ).then(
        function(json){
          jsondata = json;
          console.log(jsondata)
        }
      )

////////////////////////////

// fetch( 'https://app.zipcodebase.com/api/v1/search?apikey=24d96260-3a7b-11ed-a18a-bf519b68c32f&codes=1060', {
//   mode: 'cors', 
//   method: 'GET', 
//   headers: {'Content-Type': 'application/json'},
//   // body: JSON.stringify({})
// })
//   .then(res => {return res.json()})
//   .then(data => console.log(data))
//   .catch(error => console.log('ERROR'));

// ///*///Async/Await

// My function

/////////////////////////////
async function getData(url) {
  const response = await fetch(url);

  return response.json();
}

const data = await getData(url);

console.log({ data })
/////////////////////////////

/////////////////////////////

// My function
const myfunction = async function(x, y) {
  return [
    x,
    y,
  ];
}

// Start function
const start = async function(a, b) {
  const result = await myfunction('test', 'test');
  
  console.log(result);
}

// Call start
start();

/////////////////////////////


/////////////////////////////

async function myfunction() {
  console.log('Inside of myfunction');
}

function start() {
  return myfunction();
}

// Call start
(async() => {
  console.log('before start');

  await start();
  
  console.log('after start');
})();
///////////////////

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