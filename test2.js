function binarySearch(arr, terget) {
  let start = 0
  let end = arr.length - 1
  let mid = Math.floor((start + end) / 2)

  while (start <= end) {
    if (arr[mid] === terget) {
      return mid
    } else if (arr[mid] < terget) {
      start = mid + 1
      mid = Math.floor((start + end) / 2)
    } else {
      end = mid - 1
      mid = Math.floor((start + end) / 2)
    }
  }
  return -1
}
console.log("test");
console.log(binarySearch([10,20,30,40,50,60,70,80,90,100], 50))


///////////////////////////////////  Order Agnosted BS ////////////////////////////////

 function OrderAgnosticBinarySearch(num, terget){
    let start = 0;
    let end = num.length - 1;
    let asc;
    if(num[start]<num[end]){
        asc = true;
    }
    else{
        asc = false;
    }
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(num[mid] === terget){
            return "Data found at index " + mid;
        }
        if(asc=true){
            if(num[mid]<terget){
                start = mid + 1;
                mid = Math.floor((start+end)/2);
            }
            else{
                start = mid -1;
                mid = Math.floor((start+end)/2);
            }
        }
        else {
            if(num[mid]>terget){
                end = mid -1;
                mid = Math.floor((start+end)/2);
            }
            else{
                start = mid + 1;
                mid = Math.floor((start+end)/2);
            }
        }
        return "Data Not Found" + -1;
    }
 }

 console.log(OrderAgnosticBinarySearch([10,20,30,40,50,60,70,80,90,], 70));

 ///////////////////////////////////  Order Agnosted BS ////////////////////////////////



var targetIndices = function(nums, target) {
    nums.sort();
    console.log(nums.sort());
    let start = 0;
    let end = nums.length - 1;
    let mid = Math.floor((start+end)/2);
    while (start <= end){
        if(nums[mid] === target){
            return mid
        } else if (nums[mid] < target) {
            start = mid + 1
            mid = Math.floor((start+end)/2);
        } else {
            end = mid - 1
            mid = Math.floor((start + end)/2);
        }
    }
};
console.log(targetIndices([1,2,5,2,3], 2));



let arr = [2, 5, 8, 8, 8, 8, 8, 9, 12, 12];
let target = 8;

function numberOfOccurrence(nums, target) {
        // if (!nums.length) {
        //         return [-1, -1];
        // }
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

console.log(numberOfOccurrence([2, 5, 8, 8, 8, 8, 8, 9, 12, 12], 8));