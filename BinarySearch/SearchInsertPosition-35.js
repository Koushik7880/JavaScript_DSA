var searchInsert = function(nums, target) {
    // Last and First indexes
    let start = 0;
    let end = nums.length -1;
    let mid;

     // Traverse an array
    while(start<=end){
        mid = Math.floor((start+end)/2);

        //if target value found.
        if(target === nums[mid]){
            return mid;
        }
         // If target value is greater then mid elements's value
        else if(target>nums[mid]){
            start = mid +1;
        }
        //otherwise target value is less, 
        else{
            end = mid -1;
        }
    }
// Return the insertion position
    return end + 1;
};

console.log(searchInsert([1,3,5,6],8));
console.log(searchInsert([1,3,5,6],2));
console.log(searchInsert([1,3,5,6],7));