// function targetIndices(nums, target) {
//     nums.sort(function(a, b) {
//     return a - b;
//   });
  
//     let start = 0;
//     let end = nums.length - 1;
//     let mid;
//     while (start <= end) {
//             let count = [];
//             //Calculate Mid Point:
//             mid = Math.floor((start + end) / 2);
  
//             //When Target Value Match:
//             if (target === nums[mid]) {
//                     count.push(mid);
//                     //Check Count for left side:
//                     for (let i = mid - 1; i >= 0; i--) {
//                             if (target === nums[i]) {
//                                     count.push(i);
//                             }
//                     }
//                     //Check Count for right side:
//                     for (let i = mid + 1; i < nums.length; i++) {
//                             if (target === nums[i]) {
//                                     count.push(i);
//                             }
//                     }
//                     return count.sort();
//             }
//             //Update Star and End Point for control loop:
//             else if (target > nums[mid]) {
//                     start = mid + 1;
//             }
//             else {
//                     end = mid - 1;
//             }
//     }
//     return [];
//   }
  

  
  //////////////////////////////////////////////////////////////////////////////////////////////// 


// Javascript implementation of the above approach

// Function to find indices
// of val in array after sorting
function targetIndices(nums, val)
{
	let count_less = 0;
	let count_target = 0;

	// Loop to count smaller elements and val
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == val)
			count_target++;
		if (nums[i] < val)
			count_less++;
	}

	// List to store indices
	let ans = [];
	while (count_target--) {
		ans.push(count_less++);
	}
	return ans;
}

// Driver code
let nums = [ 1, 2, 5, 2, 3 ];
let val = 2;
let ans = targetIndices(nums, val);

	// Loop to print indices
	for (let i = 0; i < ans.length; i++) {
		// document.write(ans[i] + " ");
        return ans[i];
	}
	
// This code is contributed by Samim Hossain Mondal.

