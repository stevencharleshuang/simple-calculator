$(document).ready(() => {
  // jQuery DOM element selector vars
  const
    $btn = $('.btn'),
    $btnClear = $('.btn-clear'),
    $btnEquals = $('.btn-equals'),
    $btnNum = $('.btn-num'),
    $btnOp = $('.btn-op'),
    $display = $('.display');
  
  let
    numStr = '',
    newNumStr = '',
    eqDisplay = '',
    operator = '',
    equation = [];

  // Calculation funcs
  /**
   * Takes an equation and returns the result of a calculation given two numbers and an operator
   * @param {string} a: The first number of the equation
   * @param {string} op: The operator of the equation
   * @param {string} b: The second number of the equation
   * @returns {number} The result of the equation
   */
  const calculate = (a, op, b) => {
    switch (op) {
      case '+':
        return parseInt(a) + parseInt(b);
        break;
      case '-':
        return parseInt(a) - parseInt(b);
        break;
      case '*':
        return parseInt(a) * parseInt(b);
        break;
      case '/':
        return parseInt(a) / parseInt(b);
        break;
      default:
    }
  };

  // Initialize vars
  const initVars = () => {
    numStr = '',
    newNumStr = '',
    eqDisplay = '',
    operator = '',
    equation = [];
  };
  
  // Button Click Handlers
  $btnNum.click((e) => {
    if (operator !== '') {
      newNumStr += e.target.dataset.id;
      eqDisplay = `${equation[0]} ${equation[1]} ${newNumStr}`
      $display.text(eqDisplay)
    } else {
      numStr += e.target.dataset.id;
      $display.text(numStr);
    }
  });

  $btnOp.click((e) => {
    if (numStr !== '') {
      operator = e.target.dataset.id;
      equation.push(numStr, operator);
      console.log({equation});
      eqDisplay = `${numStr} ${operator} `
      $display.text(eqDisplay);
    }
  });

  $btnEquals.click(() => {
    if (equation.length = 2) {
      equation.push(newNumStr);
      // console.log(equation);
      let result = calculate(...equation);
      // console.log(result);
      $display.text(result);
      // Initialize vars
      initVars();
    }
  });

  $btnClear.click(() => {
    initVars()
    $display.text('0');
  });
});