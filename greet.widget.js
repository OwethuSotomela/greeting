function Greeting(local) {


    var namesList = [];
        namesList = local


    function setName(name) {
if(!namesList.includes(name))
        namesList.push(name)
    }

    function greetMessage(language, name) {


        if (language === "zulu") {
            return "Sawubona, " + name;
        }
        else if (language === "english") {
            return "Hi, " + name;
        }
        else if (language === "portuguese") {
            return "Oi, " + name;
        }

    }

    function greetCounter() {
        return namesList.length;
    }


    function getNames() {
        return namesList;
    }

    return {
        setName,
        greetMessage,
        greetCounter,
        getNames,
    }
}

