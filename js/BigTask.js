//Fetch url to json

var address = 'https://app.zipcodebase.com/api/v1/search?apikey=24d96260-3a7b-11ed-a18a-bf519b68c32f&codes=1060';

// //I'm trying the below to save the data to a variable for further manipulation'

// let geoGlobal;

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


/////////////////

document.getElementByClassName


// Selecting the iframe element
var frame = document.getElementsByClassName("iframe");
  
// Adjusting the iframe height onload event
frame.onload = function()
// function execute while load the iframe
{
  // set the height of the iframe as 
  // the height of the iframe content
  frame.style.height = 640;
  frame.contentWindow.document.body.scrollHeight + 'px';
   

 // set the width of the iframe as the 
 // width of the iframe content
 frame.style.width  = 640;
  frame.contentWindow.document.body.scrollWidth+'px';
      
}
// Set a default value for all the target classes in the html. 

// The geoGlobal has this structure: 

// geoGlobal = {query: {...},
//              results: {
//               1060: {
//                 4: {
//                   street: 'Brauergasse 5'  
//                   city: "Wien, Mariahilf",
//                   country_code: "AT",
//                   state: "Wien",
//                   latitude: "48.19520000"
//                   longitude: "16.35030000",
//                   iframe: https://i.pinimg.com/originals/eb/4a/22/eb4a22513af0fc4e427b47307a11189c.jpg
//                 },
//                 1: {},
//                 2: {}
//                 .
//                 .
//               }
//              }
// }


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