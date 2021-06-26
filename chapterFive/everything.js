function every(arr, func) {
  for (let elem of arr) {
    if (!func(elem)) {
      return false;
    }
  }
  return true
}

function some(arr, func) {
  return arr.some(func)
}


console.log(every([5, 6, 7], x => x > 3))
console.log(some([2, 34, 56], x  => x < 10))