var greetButton = document.querySelector(".greetbtn");
var outputElement = document.querySelector(".out");
var radioButtonElement = document.querySelector(".itemTypeRadio");
var textInputElement = document.querySelector(".fname");
var counterElem = document.querySelector(".countOne");

const greet = Greeting()

function aboutGreet() {
    var checkedRadioBtn = document.querySelector("input[name='itemType']:checked");
    var nameInput =  textInputElement.value


    if (checkedRadioBtn) {
        var itemType = checkedRadioBtn.value;
    }
    greet.setName(nameInput)
    outputElement.innerHTML = greet.greetMessage(itemType,nameInput)
    counterElem.innerHTML = greet.greetCounter()
}
greetButton.addEventListener('click', aboutGreet);