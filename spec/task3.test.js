const Calculator = require('../modules/task3');

describe('Task3 module => add() method', () => {
  test('should return the sum of two given numbers', () => {
    // Arrange
    const a = 1, b = 3;

    // Act
    const output = Calculator.add(a, b);

    // Assert
    expect(output).toBe(4);
  })

  test('should throw an error if any of the arguments is not a number', () => {
    // Arrange
    const a = 'abc', b = 0;

    // Act
    const output = () => Calculator.add(a, b);

    // Assert
    expect(output).toThrow();
  })

  test('should return infinity if one of the arguments is infinity', () => {
    // Arrange
    const a = Infinity, b = 0;

    // Act
    const output = Calculator.add(a, b);

    // Assert
    expect(output).toBe(Infinity);
  })
})

describe('Task3 module => subtract() method', () => {
  test('should return the difference of two given numbers', () => {
    // Arrange
    const a = 1, b = 3;

    // Act
    const output = Calculator.subtract(a, b);

    // Assert
    expect(output).toBe(-2);
  })

  test('should throw an error if any of the arguments is not a number', () => {
    // Arrange
    const a = 'abc', b = 0;

    // Act
    const output = () => Calculator.subtract(a, b);

    // Assert
    expect(output).toThrow();
  })

  test('should return infinity if the first argument is infinity', () => {
    // Arrange
    const a = Infinity, b = 0;

    // Act
    const output = Calculator.subtract(a, b);

    // Assert
    expect(output).toBe(Infinity);
  })

  test('should return negative infinity if the second argument is infinity', () => {
    // Arrange
    const a = 0, b = Infinity;

    // Act
    const output = Calculator.subtract(a, b);

    // Assert
    expect(output).toBe(-Infinity);
  })

  test('should return NaN if both arguments are infinity', () => {
    // Arrange
    const a = Infinity, b = Infinity;

    // Act
    const output = Calculator.subtract(a, b);

    // Assert
    expect(output).toBe(NaN);
  })
})

describe('Task3 module => divide() method', () => {
  test('should return the division of two given numbers', () => {
    // Arrange
    const a = 1, b = 3;

    // Act
    const output = Calculator.divide(a, b);

    // Assert
    expect(output).toBeCloseTo(0.3333333333333);
  })

  test('should throw an error if any of the arguments is not a number', () => {
    // Arrange
    const a = 'abc', b = 0;

    // Act
    const output = () => Calculator.divide(a, b);

    // Assert
    expect(output).toThrow();
  })

  test('should throw an error if the divisor (seconde argument) is zero', () => {
    // Arrange
    const a = 5, b = 0;

    // Act
    const output = () => Calculator.divide(a, b);

    // Assert
    expect(output).toThrow('Zero is not allowed as a divisor');
  })

  test('should return infinity if the first argument is infinity', () => {
    // Arrange
    const a = Infinity, b = 10;

    // Act
    const output = Calculator.divide(a, b);

    // Assert
    expect(output).toBe(Infinity);
  })

  test('should return zero if the divisor (second argument) is infinity', () => {
    // Arrange
    const a = 10, b = Infinity;

    // Act
    const output = Calculator.divide(a, b);

    // Assert
    expect(output).toBe(0);
  })

  test('should return NaN if both arguments are infinity', () => {
    // Arrange
    const a = Infinity, b = Infinity;

    // Act
    const output = Calculator.divide(a, b);

    // Assert
    expect(output).toBe(NaN);
  })
})

describe('Task3 module => multiply() method', () => {
  test('should return the multiplication of two given numbers', () => {
    // Arrange
    const a = 2, b = 3;

    // Act
    const output = Calculator.multiply(a, b);

    // Assert
    expect(output).toBeCloseTo(6);
  })

  test('should throw an error if any of the arguments is not a number', () => {
    // Arrange
    const a = 'abc', b = 1;

    // Act
    const output = () => Calculator.multiply(a, b);

    // Assert
    expect(output).toThrow();
  })

  test('should return zero if one of the arguments is zero', () => {
    // Arrange
    const a = 5, b = 0;

    // Act
    const output = Calculator.multiply(a, b);

    // Assert
    expect(output).toBe(0);
  })

  test('should return infinity if one argument is infinity and the other is not zero', () => {
    // Arrange
    const a = Infinity, b = 10;

    // Act
    const output = Calculator.multiply(a, b);

    // Assert
    expect(output).toBe(Infinity);
  })

  test('should return NaN if its arguments are zero and infinity', () => {
    // Arrange
    const a = 0, b = Infinity;

    // Act
    const output = Calculator.multiply(a, b);

    // Assert
    expect(output).toBe(NaN);
  })
})
