//Task: given the index.html file, without modifying it, 
//make a script so when the user chooses the options on 
//the dropdown menus and presses set, the box's attributes 
//are modified accordingly.


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

	//console.log(text);

	valuesArray.push({value: text});

}

//console.log(valuesArray); //Format: background, width, height

//Idea: the div's values as an array to replace them with the ones
//of the iteration. This is just testing for now.


// var changeboxWidth = document.getElementById('modify').style['width'];
// var changeboxHeight = document.getElementById('modify').style['height'];
// var changeboxBackground = document.getElementById('modify').style['background'];

// var changebox = [{value: changeboxWidth},{value:changeboxHeight},{value:changeboxBackground}];

// console.log(changebox); //Format: width, height, background


//Just checking the div's style format.

// var modifyStyle = document.getElementById('modify').style;
// console.log(modifyStyle);

// modifyArray = [{0: 'width'}, {1: 'height'}, {background: 'blue'}]

let setButton = document.getElementById('set');

setButton.addEventListener('click', function (event) {


 	//Here I would need to modify the modify's style witdh, heigh and background values with the ones
 	//of the valuesArray variable (which has the selected values of the user)

	});

