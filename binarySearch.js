// Here we take an ascending sorted array in a variable called arr 
// and a target value 110 to search from the array by using Binary Search

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]
let target = 110;

// Here we write a function called binarySearch by passing two 
//  paremeter in it. 1st paremeter is the array itself and the second
//  one is the value that need to search from the array.

function binarySearch(arr, target){
    // Now we set start and end as starting and ending point of the array. 
    // Here end = arr.length-1; means in programming index of an array start from 0. 
    // Suppose we have 3 value in a array [10,20,30] here index of this array is 0,1,2. 
    // Now we have to calculate the mid of this two value and it has to be in integer 
    // value so we use(mid = Math.floor((start+end)/2);) 

    let start = 0;
    let end = arr.length-1;
    let mid = Math.floor((start+end)/2);

    // Now we take a while loop inside the while loop we consider (start <= end)
    //  because we are passing an ascending sorted array to the binarySearch function.

    // then we apply 3 if condition for 3 diffrent possibility. 
        
    while(start <= end){
        // 1.IF our terget value = the mid value of the array then it will return 
        // the value and its index
        if(arr[mid] === target){
            return 'The value is at index '+ mid;
        }
        // 2.IF the terget value is bigger then the mid value then it will 
        // search the value from the right side of the mid value and if match 
        // then return the value and its index.If not from that index will 
        // consider as start and index end as end then initiate one more 
        // binary search by repeting the steps again.   
        else if(arr[mid] < target){
            start = mid + 1;
            mid = Math.floor((start+end)/2);
        }
        // 3.IF the terget value is less then the mid value then it will search
        //  the value from the left side of the mid value and if match then
        //   return the value and its index.If not from that index will
        //    consider as end and index start as start then initiate 
        //    one more binary search by repeting the steps again.  
        else {
            end = mid -1;
            mid = Math.floor((start+end)/2);
        }
    }

    return 'The value is not found in this array'

}
    // Here we invoke the binarySearch function with 3 diffrent array and 
    // terget value in console and show the function is working perfectly
console.log(binarySearch(arr, target));
console.log(binarySearch([-1,0,3,5,9,12], 9));
console.log(binarySearch([-1,0,3,5,9,12], 77));