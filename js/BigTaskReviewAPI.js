
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

//The below allows to clear up field after submit if the zip code is invalid, and that
//the page remains the same.

const btn = document.getElementById('zip-code-button');

btn.addEventListener('click', function handleClick(event) {
  // The below prevents a page reload
  event.preventDefault();

  //Read the zipcode in the input
  let buttonInput = document.getElementById('zip-code-search');

  //Let's consider this is jus US zip codes, which are 5 digit numbers or 
  //5 digit numbers with a 4 digit number separated by a dash.


  let isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(buttonInput.value);
  console.log(isValidZip);

  if (isValidZip == true) {
    console.log(buttonInput.value);

    //Change the iframe url query param &q=




  } else {
    buttonInput.value = '';
    alert("Please enter a valid zip code");
    console.log(buttonInput.value);
  };

});
