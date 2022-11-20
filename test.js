

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]
let target = 110;

function binarySearch(arr, target){
    let start = 0;
    let end = arr.length-1;
    let mid = Math.floor((start+end)/2);

    while(start <= end){
        if(arr[mid] === target){
            return 'data found at index ' + mid;
        }
        else if(arr[mid] < target){
            start = mid + 1;
            mid = Math.floor((start+end)/2);
        }
        else {
            end = mid -1;
            mid = Math.floor((start+end)/2);
        }
    }

}

console.log('test');
console.log(binarySearch(arr, target));