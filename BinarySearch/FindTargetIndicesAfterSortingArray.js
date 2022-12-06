var targetIndices = function (nums, target) {
  let start = 0
  let end = nums.length - 1
  let i
  let asc
  if (nums[start] < nums[end]) {
    asc = true
  } else {
    asc = false
  }

  while (start <= end) {
    i = Math.floor((start + end) / 2)
    if (nums[i] === target) {
      return i
    }
    if (asc) {
      if (nums[i] < target) {
        start = i + 1
      } else {
        end = i - 1
      }
    } else {
      if (nums[i] > target) {
        start = i + 1
      } else {
        end = i - 1
      }
    }
  }
  return [i]
}

console.log(targetIndices([1, 2, 5, 2, 3], 2))
