function Greeting() {


    var namesList= [];
    

    function setName(name){

        namesList.push(name)
    }


function greetMessage(language,name){


   if (language === "zulu") {
       return  "Sawubona, " + name;
        }
        else if (language === "english") {
         return  "Hi, " + name;
        }
        else if(language ==="portuguese"){
            return "Oi, " + name;
        }

    }

   function greetCounter(){
       return namesList.length;
   }


   function getNames(){
       return namesList;
   }

        return {
            setName,
            // aboutGreet,
            greetMessage,
            greetCounter,
            getNames,
        }
}

