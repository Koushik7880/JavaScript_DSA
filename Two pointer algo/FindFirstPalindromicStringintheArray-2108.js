function isPalindrome(str){
    let i = 0;
    let k = str.length -1;

    while(i <=k) {
        if(str[i] != str[k]){
            return false;
        }
        i++;
        k--;
    }
    return true;
}

function firstPalindrome(arr){
    for(let i = 0; i < arr.length; i++){
        if(isPalindrome(arr[i])) {
            return arr[i];
        }
    }
    return "";
}

console.log(firstPalindrome(["abc","car","ada","racecar","cool"]));
console.log(firstPalindrome(["notapalindrome","racecar"]));
console.log(firstPalindrome(["def","ghi"]));