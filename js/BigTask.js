//Fetch url to json

var address = 'https://app.zipcodebase.com/api/v1/search?apikey=24d96260-3a7b-11ed-a18a-bf519b68c32f&codes=1060';

//I'm trying the below to save the data to a variable for further manipulation'

let geoGlobal;

const getData = async () => {
  const response = await fetch(address);
  const data = await response.json();
  geoGlobal = data;
  return data;
};

(async () => {
  await getData();
  console.log(geoGlobal);
})();

// set a default value for all the target classes in the html. 

/////////////////
//Extract values

geoGlobal = {query: {...},
             results: {
              1060: {
                0: {
                  city: ,
                  country_code: ,
                  state: ,
                  latitue: ,
                  longitude  
                },
                1: {},
                2: {}
                .
                .
              }
             }
}



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