var isPerfectSquare = function(num){
   
    for (let i = 0; i * i >= 0 && i * i <= num; i++){
        if (i * i == num){
            return true;
        }
    }
    return false;
}

console.log(isPerfectSquare(25));



var perfectSquire = function(number){

    for(i=0; i*i>=0 && i*i<=number; i++){
        if(i*i== number){
            return true;
        }

    }
    return false;
}

console.log(perfectSquire(15));

var mySqrt = function(x) {
    // if (x === 1) {
    //     return x;
    // }
    // if (x === 0){
    //     return 0;
    // }

    let y = x;
    let z = (y + (x/y))/2;

    while(Math.abs(y-z) >= 0.00001){
        y = z;
        z = (y+(z/y))/2;
    }
    return Math.floor(z);
}
console.log(mySqrt(75));