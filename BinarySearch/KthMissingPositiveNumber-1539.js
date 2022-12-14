let arr = [1, 2, 3, 4]
let k = 2

function kthPos(arr, k) {
  let mA = []

  let n = 1
  let i = 0
  while (true) {
    if (n === arr[i]) {
      i++
      n++
    } else {
      mA.push(n)
      n++

      if (mA.length > target) break
    }
  }
  // return mA[k - 1];
  console.log(mA[target - 1])
}
console.log(kthPos(arr, k))
