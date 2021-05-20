var greetButton = document.querySelector(".greetbtn");
var outputElement = document.querySelector(".out");
var radioButtonElement = document.querySelector(".itemTypeRadio");
var textInputElement = document.querySelector(".fname");
var counterElem = document.querySelector(".countOne");
var resetbutton = document.querySelector(".resetBtn");
var errorElement = document.querySelector(".error");

var nameStored = [];
if (localStorage['names']) {
    nameStored = JSON.parse(localStorage.getItem('names'))
}

const greet = Greeting(nameStored)

function aboutGreet() {
    var checkedRadioBtn = document.querySelector("input[name='itemType']:checked");

    var nameInput = textInputElement.value

    if (checkedRadioBtn) {
        var itemType = checkedRadioBtn.value;
    }
    if (nameInput == '' && !checkedRadioBtn) {
        errorElement.innerHTML = "Please enter a valid name and select a language!";
    }else  if (nameInput == '') {
        errorElement.innerHTML = "Please enter a valid name!";
    } else if (!checkedRadioBtn) {
        errorElement.innerHTML = "Please select a language!";
    } else {
        greet.setName(nameInput)
        errorElement.innerHTML = greet.getMessage();
        counterElem.innerHTML = greet.greetCounter();
        localStorage.setItem('names', JSON.stringify(greet.getNames()));

        outputElement.innerHTML = greet.firstL(textInputElement.value, itemType);
    }
    nameInput = ''
}
resetbutton.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
})
counterElem.innerHTML = greet.greetCounter();
greetButton.addEventListener('click', aboutGreet);

