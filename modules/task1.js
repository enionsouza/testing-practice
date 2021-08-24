
function stringLength(string) {
  if (string === '') throw new Error('String should be at least 1 character long');
  if (string.length > 10) throw new Error('String should not be longer than 10 characters');
  return string.length;
}

module.exports = stringLength;
