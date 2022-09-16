
//Task: I need to add a listener on click, so when the set button is clicked
//the div's attributes are modified.

//We gotta select all the css properties as an array

let property = document.querySelectorAll('select[name="cssProperty"]');

console.log(property);

let i;

var valuesArray = [];

for (i = 0; i <= property.length; i++) {

	// Now we gotta make an array of the options the user 
	// has selected 

	if (i == property.length) {break;}

	var selectedProperty = property[i];
	var value = selectedProperty.options[selectedProperty.selectedIndex].value;
	var text = selectedProperty.options[selectedProperty.selectedIndex].text;

	console.log(text);

	valuesArray.push({value: text});

}

console.log(valuesArray);



//We gotta select the div to replace its values with the ones
//of the iteration

var changebox = document.getElementById('modify');

changebox.addEventListener('click', function {
		//modify the modify variable for the concat of the selected values
	});


