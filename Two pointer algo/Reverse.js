// let numbers = [10,20,30,40,50]

// let size = numbers.length -1;
// let temp;

// console.log({Before: numbers});

// function reverse(numbers){
//     for(let i = 0, k = size; i<=k; i++, k--){
//         temp = numbers[i];
//         numbers[i] = numbers[k];
//         numbers[k] = temp;
//     }
// }


// console.log(reverse(numbers));
// console.log({After: numbers});


function reverse(image){
    let size = image.length -1;
    let temp;
    for(let i = 0, k = size; i<=k; i++, k--){
        temp = image[i];
        image[i] = image[k];
        image[k] = temp;
    }
}

var flipAndInvertImage = function(image) {

    for (let i = 0; i < image.length; i++){
        reverse(image[i])
        // image[i].reverse();
        for (let j = 0; j< image[i].length; j++){
            if(image[i][j] === 0){
                image[i][j] = 1;
            }
            else if (image[i][j] === 1){
                image[i][j] = 0;
            }
        }
    }
    
    return image;
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));