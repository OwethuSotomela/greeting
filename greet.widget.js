function Greeting(local) {

    var namesList = [];
    namesList = local
    var message = "";

    function setName(string) {
        if (string != ''){
            var name = string[0].toUpperCase() + string.slice(1).toLowerCase();
            if (!namesList.includes(name)) {
                namesList.push(name)
            } else {
                message = "Name already greeted!";
            }
        }
        
    }

    function greetCounter() {
        return namesList.length;
    }
    function getNames() {
        return namesList;
    }
    function firstL(string, names) {
        if (string != '' && names != '') {
            return names + string[0].toUpperCase() + string.slice(1).toLowerCase();
        }
    }
    function getMessage() {
        return message;
    }

    return {
        setName,
        greetCounter,
        getNames,
        firstL,
        getMessage,
    }
}

