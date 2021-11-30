let leftOperand;
let rightOperand;
let operator = 'ADDITION';
let answer;
let expression;


function onLeftOperandChange(value) {
  console.log('onLeftOperandChange', value);
  leftOperand = +value;
}

function onRightOperandChange(value) {
  console.log('onRightOperandChange', value);
  rightOperand = +value;
}

function onOperatorChange(value) {
  console.log('onOperatorChange', value);
  operator = value;
}

function onSubmit () {
  console.log('onSubmit');
  switch (operator) {
    case 'ADDITION':
      answer = leftOperand + rightOperand;
      expression = `(${expression ?? leftOperand} + ${rightOperand})`;
      break;
    case 'SUBTRACTION':
      answer = leftOperand - rightOperand;
      expression = `(${expression ?? leftOperand} - ${rightOperand})`;
      break;
    case 'MULTIPLICATION':
      answer = leftOperand * rightOperand;
      expression = `(${expression ?? leftOperand} * ${rightOperand})`;
      break;
    case 'EXPONENTIATION':
      answer = leftOperand ** rightOperand;
      expression = `(${expression ?? leftOperand} xª ${rightOperand})`;
      break;
    case 'DIVISION':
      answer = leftOperand / rightOperand;
      expression = `(${expression ?? leftOperand} / ${rightOperand})`;
      break;
    case 'MODULUS':
      answer = leftOperand % rightOperand;
      expression = `(${expression ?? leftOperand} % ${rightOperand})`;
      break;
    case 'ROOT':
      answer = leftOperand ** (1 / rightOperand);
      expression = `(${expression ?? leftOperand} √ ${rightOperand})`;
      break;
  }
  setResult(answer);
  setExpression(`${expression} = ${answer}`);
}

function onClear () {
  console.log('onClear');
  leftOperand = null;
  rightOperand = null;
  operator = 'ADDITION';
  answer = null;
  expression = null;
}
