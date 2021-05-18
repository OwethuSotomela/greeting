var greetButton = document.querySelector(".greetbtn");
var outputElement = document.querySelector(".out");
var radioButtonElement = document.querySelector(".itemTypeRadio");
var textInputElement = document.querySelector(".fname");
var counterElem = document.querySelector(".countOne");

var nameStored = [];
if (localStorage['names']){
    nameStored = JSON.parse(localStorage.getItem('names'))
}

const greet = Greeting(nameStored)

function aboutGreet() {
    var checkedRadioBtn = document.querySelector("input[name='itemType']:checked");
    var nameInput =  textInputElement.value

    

    if (checkedRadioBtn) {
        var itemType = checkedRadioBtn.value;
        if(nameInput != ''){
    
        greet.setName(nameInput)
        outputElement.innerHTML = greet.greetMessage(itemType,nameInput)
        greet.setName(nameInput)
        counterElem.innerHTML = greet.greetCounter()
        localStorage.setItem('names', JSON.stringify(greet.getNames()))

        outputElement.innerHTML = greet.firstL(textInputElement.value);
       
    }
}

}
counterElem.innerHTML = greet.greetCounter();
greetButton.addEventListener('click', aboutGreet);

