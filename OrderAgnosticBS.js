let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    let asc;
    if (arr[start] < arr[end]) {
        asc = true;
    }
    else {
        asc = false;
    }

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return 'Data found at index ' + mid;
        }
        if (asc) {
            console.log('here');
            if (arr[mid] < target) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }    
        }
        else {
            console.log('here');
            if (arr[mid] > target) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
    }


    return 'Data not found'

}
console.log(binarySearch([30, 25, 20, 15, 10], 25));
console.log(binarySearch(arr2, 80));




//  24.28 sec 



// while(start <= end){
//     mid = Math.floor((start + end) / 2);

//     if(arr[mid] === target){
//         return 'Data found at index ' + mid;
//     }
//     else if(arr[mid]<target) {
//         start = mid + 1;
//     }
//     else {
//         end = mid - 1;
//     }
// }