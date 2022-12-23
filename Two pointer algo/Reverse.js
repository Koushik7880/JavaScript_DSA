let numbers = [10,20,30,40,50]

let size = numbers.length -1;
let temp;

console.log({Before: numbers});

function reverse(numbers){
    for(let i = 0, k = size; i<=k; i++, k--){
        temp = numbers[i];
        numbers[i] = numbers[k];
        numbers[k] = temp;
    }
}


// console.log(reverse(numbers));
console.log({After: numbers});