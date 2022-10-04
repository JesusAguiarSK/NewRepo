
//Select the button
const btn = document.getElementById('zip-code-button');


//Create event handler
btn.addEventListener('click', function handleClick(event) {

  //Prevent the page to reload on event
  event.preventDefault();

  //Read the input tag
  let buttonInput = document.getElementById('zip-code-search');

  //Get zip Code entered
  let zipCode = buttonInput.value;
  console.log(zipCode);

  //Check whether the zip code is valid
  //Consider just US zip codes, which are 5 digit numbers or 
  //5 digit numbers with a 4 digit number separated by a dash.

  let isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
  console.log(isValidZip);

  //Get the default src so we can manipulate it later

  var srcDefaultZipCode = document.getElementById("map-iframe-id").src;
  console.log(srcDefaultZipCode); 

  //Check if the zip code is valid

  if (isValidZip == true) {

    console.log(zipCode);

    //Strip the src and add the zip code entered

    let srcStripZipCode = srcDefaultZipCode.substring(0, srcDefaultZipCode.lastIndexOf('=') + 1) + zipCode;

    console.log(srcStripZipCode);

    //Change the iframe src with the updated one

    document.getElementById("map-iframe-id").src=srcStripZipCode;

  } else {
    buttonInput.value = '';
    alert("Please enter a valid zip code");
    console.log(buttonInput.value);
  };

});
