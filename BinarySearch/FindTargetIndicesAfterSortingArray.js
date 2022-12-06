function targetIndices(nums, target) {
  nums.sort(function(a, b) {
  return a - b;
});

  let start = 0;
  let end = nums.length - 1;
  let mid;
  while (start <= end) {
          let count = [];
          //Calculate Mid Point:
          mid = Math.floor((start + end) / 2);

          //When Target Value Match:
          if (target === nums[mid]) {
                  count.push(mid);
                  //Check Count for left side:
                  for (let i = mid - 1; i >= 0; i--) {
                          if (target === nums[i]) {
                                  count.push(i);
                          }
                  }
                  //Check Count for right side:
                  for (let i = mid + 1; i < nums.length; i++) {
                          if (target === nums[i]) {
                                  count.push(i);
                          }
                  }
                  return count.sort();
          }
          //Update Star and End Point for control loop:
          else if (target > nums[mid]) {
                  start = mid + 1;
          }
          else {
                  end = mid - 1;
          }
  }
  return [];
}

console.log(targetIndices([100,100,100,100,100,100,100,,100,100,100],100));
// console.log(targetIndices([1,2,5,2,3],2));
// console.log(targetIndices([1,2,5,2,3],3));
// console.log(targetIndices([1,2,5,2,3],5));

// var numArray = [100,100,100,100,100,100,100,
//   100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100];
// numArray.sort(function(a, b) {
//   return a - b;
// });

// console.log(numArray); 