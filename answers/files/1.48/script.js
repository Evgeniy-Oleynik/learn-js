const ADDITION = 'ADDITION';
const SUBTRACTION = 'SUBTRACTION';
const MULTIPLICATION = 'MULTIPLICATION';
const EXPONENTIATION = 'EXPONENTIATION';
const DIVISION = 'DIVISION';
const MODULUS = 'MODULUS';
const ROOT = 'ROOT';

let leftOperand;
let rightOperand;
let operator = ADDITION;
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
  let iterationOperand = expression ?? leftOperand;
  switch (operator) {
    case ADDITION:
      answer = leftOperand + rightOperand;
      expression = `(${iterationOperand} + ${rightOperand})`;
      break;
    case SUBTRACTION:
      answer = leftOperand - rightOperand;
      expression = `(${iterationOperand} - ${rightOperand})`;
      break;
    case MULTIPLICATION:
      answer = leftOperand * rightOperand;
      expression = `(${iterationOperand} * ${rightOperand})`;
      break;
    case EXPONENTIATION:
      answer = leftOperand ** rightOperand;
      expression = `(${iterationOperand} xª ${rightOperand})`;
      break;
    case DIVISION:
      answer = leftOperand / rightOperand;
      expression = `(${iterationOperand} / ${rightOperand})`;
      break;
    case MODULUS:
      answer = leftOperand % rightOperand;
      expression = `(${iterationOperand} % ${rightOperand})`;
      break;
    case ROOT:
      answer = leftOperand ** (1 / rightOperand);
      expression = `(${iterationOperand} √ ${rightOperand})`;
      break;
  }
  setResult(answer);
  setExpression(`${expression} = ${answer}`);
}

function onClear () {
  console.log('onClear');
  operator = ADDITION;
  expression = null;
}
