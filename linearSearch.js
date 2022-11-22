// suppose we have an array of numbers and a tergeted value 110, now we have to search the value and its index from the array by using linear search algorithm which is called or brute force algorithn approch also.

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]


//  Now we are going to make a function which will be used to iterate through this arrau of numbers.

// The function bellow will have 2 parameters. 
// - One is the array we want to iterate through and 
// - another one is the number which we want to find from this array



function linearSearch(arrayOfValues, valueToFind){

    // We have created a foor loop to iterate through all the values of the array. until the tergated value is found.

    for(let i=0; i < arrayOfValues.length; i++){
        if(valueToFind === arrayOfValues[i]){
            // when the value of targeted item match to any item of the array, we return the index of the item.
            return "Index of the value: " + i;
        }
    }

    // when the loop ends but no item matches with the value of the targeted item, then we know that the item doesn't exist in the array

    return "Value not found.";
}

// Now we will call the function and will pass our numbers array and a desired number (suppose 110) as arguments to find from that array 

console.log(linearSearch(numbers, 110));

// Now lets try to search a number which is not present in the array 

console.log(linearSearch(numbers, 200));