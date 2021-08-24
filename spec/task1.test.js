const stringLength = require('../modules/task1');

describe('Task1 module', () => {
  test('should return the correct length of a string', () => {
    // Arrange
    input = 'Microverse';

    // Act
    output = stringLength(input);

    // Assert
    expect(output).toBe(10);
  });

  test('should throw an error for strings longer than 10 characters', () => {
    // Arrange
    input = 'JavaScript is awesome';

    // Act
    output = () => stringLength(input);

    // Assert
    expect(output).toThrow('String should not be longer than 10 characters');
  });

  test('should throw an error for empty strings', () => {
    // Arrange
    input = '';

    // Act
    output = () => stringLength(input);

    // Assert
    expect(output).toThrow('String should be at least 1 character long');
  });
})
