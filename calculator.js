  /* Function to add, subtract, multiply, divide or modulus of
   * two numbers num1 and num2 whose value will be obtained
   * from the input elements "num1" and "num2". The result
   * will be placed in a read only input element "result".
   * The background color of the result will be green for a result
   * with any number or orange if the result is infinity or NaN.
   */
  function compute() {
    // Clear style background colors
    document.getElementById("num1").style.backgroundColor = "";
    document.getElementById("num2").style.backgroundColor = "";
    document.getElementById("result").style.backgroundColor = "";

    // Set Constants
    const WHITE = "white";

    // Get the values of num1 and num2 from input fields
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    // Make sure num1 and num2 are numbers
    if (isNaN(num1)) {
      document.getElementById("num1").style.backgroundColor = "red";
      document.getElementById("result").value = "Num1 Not Number";
      return;
    }
    if (isNaN(num2)) {
      document.getElementById("num2").style.backgroundColor = "red";
      document.getElementById("result").value = "Num2 Not Number";
      return;
    }
    // Change num1 and num2 from string to numeric
    num1 = Number(num1);
    num2 = Number(num2);

    // Get the operation from the select box
    let operation = document.getElementById("operation").value;
    let label = document.getElementById("operation").selectedOptions[0].label;
    console.log(`Label For Selected Option = ${label}`);
    console.log(`Value For Selected Option = ${operation}`);
    let result = "?";

    // Determine the operation and perform the arithemetic
    if (operation == "+") {
      result = num1 + num2;
    } else if (operation == "-") {
      result = num1 - num2;
    } else if (operation == "*") {
      result = num1 * num2;
    } else if (operation == "/") {
      result = num1 / num2;
    } else if (operation == "%") {
      result = num1 % num2;
    } else if (operation == "√") {
      hideNum2();
      result = Math.round((Math.sqrt(num1) * 10000)) / 10000;
    } else if (operation == "∛") {
      hideNum2();
      result = Math.round((Math.cbrt(num1) * 10000)) / 10000;
    }

    // Set the input box background color to green for a valid result
    // otherwise orange for infinity or NaN
    document.getElementById("result").value = result;
    if ((operation == "/" || operation == "%") && num2 == 0) {
      document.getElementById("result").style.backgroundColor = "Orange";
    } else {
      document.getElementById("result").style.backgroundColor = "LawnGreen";
      document.getElementById("result").style.fontWeight = "Bold";
    }
  }

  function resetResult() {

    const WHITE = "white";
    const VISIBLE = "visible";

    document.getElementById("result").style.backgroundColor = WHITE;
    document.getElementById("num1").style.backgroundColor = WHITE;
    document.getElementById("num2").style.backgroundColor = WHITE;
    document.getElementById("num2").style.visibility = VISIBLE;
    document.getElementById("num2-label").style.visibility = VISIBLE;
  }

  function hideNum2() {
    let operation = document.getElementById("operation").value;
    if (operation === "∛" || operation === "√") {
      document.getElementById("num2").style.visibility = "hidden";
      document.getElementById("num2-label").style.visibility = "hidden";
    } else {
      document.getElementById("num2").style.visibility = "visible";
      document.getElementById("num2-label").style.visibility = "visible";
    }
  }
