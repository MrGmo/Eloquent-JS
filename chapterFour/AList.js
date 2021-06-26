let list =  {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}

function arrayToList(arr) {
  let list = null
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {value: arr[i], rest: list};
  }
  return list
}

function listToArray(list) {
  let arr = []
  for (let i = list; list; list = list.rest) {
    arr.push(list.value)
  }
  return arr
}

function prepend(value, list) {
  return {value, rest: list}
}

function nth(list, n) {
  if (!list) return undefined;
  if (n === 0) return list.value;
  return nth(list.rest, n-1)
}

console.log(arrayToList([1, 2, 3]))
console.log(listToArray(list))
console.log(prepend(10, prepend(20, null)))
console.log(nth(arrayToList([10, 20, 30]), 1))