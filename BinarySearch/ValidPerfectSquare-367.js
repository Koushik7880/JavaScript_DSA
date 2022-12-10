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

