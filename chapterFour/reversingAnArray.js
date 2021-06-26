function reverseArray(arr) {
  return arr.reduce((a, b) => b + a, '').split('').map(x => Number(x))
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let old = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = old
  }
  return arr
}

console.log(reverseArray([1, 2, 3, 4 ,5 ]))
console.log(reverseArrayInPlace([1, 2, 3, 4 ,5 ]))