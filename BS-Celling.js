const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function FlooringAndCling(arr, target) {
  let start = 0
  let end = arr.length - 1
  let middel
  let chackAscDsc
  let obj = {}
  if (arr[start] < arr[end]) {
    chackAscDsc = true
  } else {
    chackAscDsc = false
  }

  while (start <= end) {
    middel = Math.floor((start + end) / 2)
    if (arr[middel] === target) {
      obj['flooring'] = arr[middel - 1]
      obj['cling'] = arr[middel]
      return obj
    } else if (chackAscDsc) {
      if (arr[middel] < target) {
        start = middel + 1
      } else {
        end = middel - 1
      }
    } else {
      if (arr[middel] > target) {
        start = middel + 1
      } else {
        end = middel - 1
      }
    }
  }

  obj['flooring'] = arr[middel - 1]
  obj['cing'] = arr[middel]
  // return -1
  return obj
}

const output = FlooringAndCling(ss, 9); // {floring: 8, cling: 9}
const output1 = FlooringAndCling(ss, 2); //{flooring: 1, cling: 2}
console.log('test');
console.log(FlooringAndCling(ss, 9));
console.log(FlooringAndCling(ss, 2));
