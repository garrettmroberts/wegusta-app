const capitalize = (words) => {
  const resArr = [];
  words.split(' ').forEach(word => {
    resArr.push(word[0].toUpperCase() + word.substring(1).toLowerCase());
  })

  return resArr.join(' ');
}

module.exports = capitalize;