//Fetch url to json

var address = 'https://app.zipcodebase.com/api/v1/search?apikey=24d96260-3a7b-11ed-a18a-bf519b68c32f&codes=1060';

// function getData(url, cb) {
//   fetch(address)
//     .then(response => response.json())
//     .then(result => cb(result))
//     .catch(error => console.log('ERROR'))
// }

// getData(address, (data) => console.log({ data }))

///////////////////////////

let jsondata;    
fetch(address).then(
        function(u){ return u.json();}
      ).then(
        function(json){
          jsondata = json;
          console.log(jsondata)
        }
      )
// set a default value for all the target classes in the html. 

/////////////////
//Extract values





/////////////////
//Paste them to the html


// var geoObjectDefault = geoArray.method to extract the below values.
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

//       // var geoObjectFilter = geoObjectDefault.method to extract the below values.

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