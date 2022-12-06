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
