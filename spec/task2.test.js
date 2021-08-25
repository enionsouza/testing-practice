const reverseString = require('../modules/task2');

describe('Task2 module', () => {
  test('should take a string as an argument and return it reversed', () => {
    // Arrange
    const input = 'JavaScript is awesome!';

    // Act
    const output = reverseString(input);

    // Assert
    expect(output).toBe('!emosewa si tpircSavaJ');
  })
})