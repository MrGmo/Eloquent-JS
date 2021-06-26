function rangeSum(start, end, step = start < end ? 1 : -1) {
  let resultArr = []
  if (step < 0) {
    for (let i = start; i >= end; i+=step) {
      resultArr.push(i)
    }
  } else {
    for (let i = start; i <= end; i+=step) {
      resultArr.push(i)
    }
  }
  return resultArr.reduce((a, b) => a + b, 0)
}

console.log(rangeSum(1, 10, 2))