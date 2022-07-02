window.alert(
        "Hello! Welcome to Barbie's Calculator. Click OK to continue"
      );
      let num1 = parseInt(prompt("Kindly Enter Your First Number"));
      let option = prompt(
        "Kindly Select An Operator From The Following Options: +, -, /, *"
      );
      let num2 = parseInt(prompt("Kindly Enter Your Second Number"));

      if (option === "+") {
        let addition = num1 + num2;
        alert(addition);
      } else if (option === "-") {
        let subtraction = num1 - num2;
        alert(subtraction);
      } else if (option === "*") {
        let multiplication = num1 * num2;
        alert(multiplication);
      } else if (option === "/") {
        let division = num1 / num2;
        alert(division);
      } else alert("Invalid Input!");
