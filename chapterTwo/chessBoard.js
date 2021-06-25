function chessboard(str) {
  let resultStr = ''
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i+j) % 2 === 0) {
        resultStr += ' '
      } else {
        resultStr+= '#'
      }
    }
    resultStr += '\n'
  }
  console.log(resultStr)
}


console.log(chessboard('###############################'))