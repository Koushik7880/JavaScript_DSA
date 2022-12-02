const bojchack = [
  { name: 'alamin', age: 27 },
  { name: 'badon', age: 25 },
  { name: 'momin', age: 30 },
  { name: 'sisir', age: 27 },
  { name: 'sisir', age: 22 },
  { name: 'sisir', age: 25 },
  { name: 'sisir', age: 26 },
  { name: 'yasin', age: 32 },
]

function SercheMultiName(arr, target) {
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

    if (arr[middel].name == target) {
      let count = 0

      for (let i = middel; 0 < i; i--) {
        if (arr[middel].name == arr[i].name) {
          obj[arr[middel].name] = count++
        } else {
          break
        }
      }
      for (let i = middel; i < arr.length; i++) {
        if (arr[middel].name == arr[i].name) {
          obj[arr[middel].name] = count++
        } else {
          break
        }
      }
      return obj
    }
    if (chackAscDsc) {
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

  return -1
}

const chackobj = SercheMultiName(bojchack, 'sisir')

console.log(chackobj) // {sisir:4}
