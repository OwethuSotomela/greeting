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
    }else  if (nameInput == '' || !/^[a-zA-Z]+$/.test(nameInput)) {
        errorElement.innerHTML = "Please enter a valid name!";
    } else if (!checkedRadioBtn) {
        errorElement.innerHTML = "Please select a language!";
    } else {
        greet.setName(nameInput)
        errorElement.innerHTML = greet.getMessage();
        counterElem.innerHTML = greet.greetCounter();
        localStorage.setItem('names', JSON.stringify(greet.getNames()));

        greet.greetMessage(itemType, textInputElement.value)
        outputElement.innerHTML = greet.getGreet();
    }

    setTimeout(function(){
        errorElement.innerHTML = "";
    
     }, 2000) 

    textInputElement.value = ""
    document.querySelector(".fname").value = ""
    
}
resetbutton.addEventListener('click', function () {
    
    errorElement.classList.remove('error')
    errorElement.classList.add('error1')
    errorElement.innerHTML = "localStorage will be cleared after one second"

    setTimeout(function(){
        localStorage.clear();
        location.reload();
         }, 1000)
         
})
counterElem.innerHTML = greet.greetCounter();
greetButton.addEventListener('click', aboutGreet);

