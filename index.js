const display = document.getElementById("display");
const resultContainer = document.getElementById("result-container");
const result = document.getElementById("result");

// Append character to the input field
function appendToDisplay(character) {
    display.value += character;
}

// Delete the last character from the input field
function DeleteLastCharacter() {
    resultContainer.style = "display: none"; // Hide result when modifying input
    display.value = display.value.slice(0, -1);
}

// Clear the input and result fields
function clearDisplay() {
    resultContainer.style = "display: none"; // Hide result when clearing
    display.value = "";
    result.value = "";
}

// Perform calculation
function calculate() {
    let input = display.value;

    // Replace "mod" with "%" for modulus operations
    let newInput = input.replace(/mod/g, "%");
   
    // Show or hide result container based on input
    resultContainer.style = newInput ? "display: block" : "display: none";

    try {
        // Evaluate the expression and display the result
        result.value = "=" + eval(newInput);
    } catch (error) {
        // Display error name if the expression is invalid
        result.value = error.name;
    }
}
