function displayNumbers(num) {
  input_screen.value += num.value;
}

function caluclatin() {
  let arrayNumbers = [];
  let ArrayOperators = [];
  let numToCalculate = "";
  let result = 0;
  for (let i = 0; i < input_screen.value.length; i++) {
    switch (input_screen.value[i]) {
      case "+":
      case "-":
      case "*":
      case "÷":
        arrayNumbers.push(+numToCalculate);
        numToCalculate = "";
        ArrayOperators.push(input_screen.value[i]);
        break;
      default:
        numToCalculate += input_screen.value[i];
        break;
    }
    if (i == input_screen.value.length - 1) {
      arrayNumbers.push(+numToCalculate);
    }
  }

  result = arrayNumbers[0];
  for (let i = 0; i < ArrayOperators.length; i++) {
    switch (ArrayOperators[i]) {
      case "+":
        result += arrayNumbers[i + 1];
        break;
      case "-":
        result -= arrayNumbers[i + 1];
        break;
      case "%":
        result /= arrayNumbers[i + 1];
        break;
      case "*":
        result *= arrayNumbers[i + 1];
        break;
      default:
        break;
    }
  }
  input_screen.value = result
}

function deleteAll() {
  input_screen.value.toString();
  input_screen.value=input_screen.value.slice(0,-1)
}

function clearAll() {
  input_screen.value=""
}
