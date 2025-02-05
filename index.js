const display = document.getElementById("display");
const resultContainer = document.getElementById("result-container");

const result = document.getElementById("result");


function appendToDisplay(character){
    display.value += character;
}

function DeleteLastCharacter(){
    resultContainer.style = "display: none";
    display.value = display.value.slice(0, -1);
}

function clearDisplay(){
    resultContainer.style = "display: none";
    display.value = "";
    result.value = "";
}

function calculate(){
    let input = display.value;
    let newInput = input.replace(/mod/g, "%");
   
    if (newInput){
        resultContainer.style = "display: block";
    }else{
        resultContainer.style = "display: none";
    }

    
    try{
        result.value = "=" + eval(newInput);
    }
    catch(error){
        result.value = error.name;
    }
   
   
}