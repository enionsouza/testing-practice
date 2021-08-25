class Calculator {
  static #validate(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
      throw new Error('This function should receive two numbers as arguments')
    }
    return true;
  }

  static #divisorIsNotZero(b) {
    if (b === 0) {
      throw new Error('Zero is not allowed as a divisor')
    }
    return true;
  }

  static add(a, b) {
    if (this.#validate(a, b)) return a + b;
  }

  static subtract(a, b) {
    if (this.#validate(a, b)) return a - b;
  }

  static divide(a, b) {
    if (this.#validate(a, b) && this.#divisorIsNotZero(b)) return a / b;
  }

  static multiply(a, b) {
    if (this.#validate(a, b)) return a * b;
  }
}

module.exports = Calculator;
