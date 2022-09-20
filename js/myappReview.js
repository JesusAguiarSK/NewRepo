// Using Array.from to interect with button

document.getElementById('set').addEventListener('click', function(event) {
    let targetBox = document.getElementById('modify');

    Array.from(document.querySelectorAll('select[name="cssProperty"]'))
        .forEach(function(element) {
            let property = element.id;
            let value = element.value;
            targetBox.style[property] = value;
        });
});

//Using for loop to interact with button

document.getElementById('set').addEventListener('click', function(event) {

    let targetBox = document.getElementById('modify');

    let selectElements = document.querySelectorAll('select[name="cssProperty"]');

    for (let i = 0; i < selectElements.length; i++) {
        targetBox.style[selectElements[i].id] = selectElements[i].value;
    }
});

// Using change event to automatically update the box without need of button

function updateStyle(element) {
    let targetBox = document.getElementById('modify');
    targetBox.style[element.id] = element.value;
}

let selectedElements = document.querySelectorAll('select[name="cssProperty"]');

for (var i = 0; i < selectedElements.length; i++) {
    selectedElements[i].addEventListener('change', function(event) {
        updateStyle(event.currentTarget);
    });
}