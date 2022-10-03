
//Fetch url to json

var address = 'https://app.zipcodebase.com/api/v1/search?apikey=24d96260-3a7b-11ed-a18a-bf519b68c32f&codes=1060';

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

//The below allows to 1) clear up field after submit, and that
//the page remains the same.

const btn = document.getElementById('zip-code-button');

btn.addEventListener('click', function handleClick(event) {
  // The below prevents a page reload
  event.preventDefault();

  const buttonInput = document.getElementById('zip-code-search');

  //Let's consider this is jus US zip codes, which are 5 digit numbers or 
  //5 digit numbers with a 4 digit number separated by a dash.


  var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(buttonInput.value);
  console.log(isValidZip);

  if (isValidZip == true) {
    console.log(buttonInput.value);
  } else {
    buttonInput.value = '';
    alert("Please enter a valid zip code");
    console.log(buttonInput.value);
  };

});

/////////////////

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


// var geoObjectDefault = geoGlobal.method to extract the below values.
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