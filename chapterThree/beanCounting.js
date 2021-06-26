function countChar(str, char) {
  let count = 0
  for (let letter of str) {
    if (letter === char) {
      count++
    }
  }
  return count
}

function countBs(str) {
  return countChar(str, 'B')
}

console.log(countBs('BBC'))
console.log(countChar("kakkerlak", "k"))