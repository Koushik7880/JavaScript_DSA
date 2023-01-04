// Two pointers
var twoSumm = function(numbers, target) {
    // Start a pointer on each side of the array
    let left = 0;
    let right = numbers.length-1
    while(left < right) {
        const cur = numbers[left] + numbers[right];
        // Return 1 base index if the current sum is equal to the target
        if(cur === target) return [left+1, right+1]
        // Because the array is sorted, anytime we move a pointer to the right numbers will get bigger and anytime we move a pointer to the left, numbers will get smaller
        // If cur is greater than target that means we need to use smaller numbers in our sum and we move the right pointer to the left.
        // If cur is less than target that means we need to use bigger number in our sum and we move the left pointer to the right.
        cur > target ? right-- : left++
    }
};

console.log(twoSumm([2,7,11,15],9));


var twoSummm = function (numbers, target) {
    let left = 0;
    let right = numbers.length-1;
    while(left<right){
        const valu = numbers[left] + numbers[right];
        // Return 1 base index if the current sum is equal to the target
        if (valu === target){
            return [left+1, right+1];
            
        }
        if(valu > target){
            return [right--]  
        }
        
        // valu > target ? right-- : left++
       
    }
}

console.log(twoSummm([2,7,11,15],9));


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let s=0;
    let e= numbers.length-1;
    let sum=0;
 
    while(s<e){
     sum=numbers[s]+numbers[e];
     if(sum==target){
         return [s+1,e+1];
     }
     else{
         if(sum > target){
             e-- 
         }else{
         s++;
         }
     }
     
    }
    return [];
 };
 
 let numbers = [2,7,11,15]; target = 9;
 console.log(twoSum(numbers, target))