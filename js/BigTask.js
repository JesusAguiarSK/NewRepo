
var geoArray = [];

fetch( 'https://app.zipcodebase.com/api/v1/search?apikey=24d96260-3a7b-11ed-a18a-bf519b68c32f&codes=1060', {mode: 'cors', method: 'GET', })
  .then(res => res.json())
  .then(data => { geoArray.push(data);}) 
  .catch(error => console.log('ERROR'));

console.log(geoArray)



// let geoArrayDefault = geoArray.method to extract the below values.
      //Information
        // Street,
        // City,
        // State
        // Country
      //link to map
        //map

//Paste the link to the map to the iframe, or do I need to use another API to extract the iframe?

//Convert the information it to a list in html?

// document.getElementById('button-group-box').addEventListener('click', function(event) {

// //check if post code is valid

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
//       document.getElementById('zip-code').addEventListener('', function (event) {
//         //reset content of zip code
//       });