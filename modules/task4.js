function capitalize(string) {
  if (typeof string !== 'string') throw new Error('Expected argument to be a string');
  return string[0].toUpperCase() + string.slice(1);
}

module.exports = capitalize;