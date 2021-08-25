const capitalize = require('../modules/task4');

describe('Task4 module', () => {
  test('should take a string as an argument and return that string with the first character capitalized', () => {
    // Arrange
    const input = 'hello world';

    // Act
    const output = capitalize(input);

    // Assert
    expect(output).toBe('Hello world');
  })

  test('should throw an error if the argument is not a string', () => {
    // Arrange
    const input = 123;

    // Act
    const output = () => capitalize(input);

    // Assert
    expect(output).toThrow();
  })
})
