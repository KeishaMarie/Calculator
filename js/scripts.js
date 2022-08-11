    function add(number1, number2) {
     return number1 + number2;
    }
    
    function subtract(number1, number2) {
     return number1 - number2;
    }

    function multiply(number1, number2) {
    return number1 * number2;
    }

    function divide(number1, number2) {
     return number1 / number2;
    }

window.addEventListener("load", function() {
  let form = document.getElementById("numberInput");
  form.addEventListener("submit", function(event) {
  event.preventDefault();
  const number1 = parseInt(document.getElementById("number1").value);
  const number2 = parseInt(document.getElementById("number2").value);
  const operator = document.querySelector("input[name='operation']:checked").value;
  

  let result;
  if(operator === "add") {
    result = add(number1, number2);
  } else if (operator === "subtract") {
    result = subtract(number1, number2);
  } else if (operator === "multiply") {
    result = multiply(number1, number2); 
  } else if (operator === "divide") {
    result = divide(number1, number2);
  }
  
  document.getElementById("output").innerText = result;
});
});    


