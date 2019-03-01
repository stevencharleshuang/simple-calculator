$(document).ready(() => {
  // jQuery DOM element selector vars
  const
    $btn = $('.btn'),
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

  const calculate = (a, op, b) => {
    switch (op) {
      case '+':
        return parseInt(a) + parseInt(b);
      default:
    }
  };
  
  // Button Click Handler
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
      console.log(equation);
      let result = calculate(...equation);
      console.log(result);
    }
  });
});