class Calcuator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector(['data-delete']);
const previousOperandTextElement = document.querySelector([
  'data-previous-operand',
]);
const currentOperandTextElement = document.querySelector(
  'data-current-operand'
);
const equalButton = document.querySelector('[data-equal]');
