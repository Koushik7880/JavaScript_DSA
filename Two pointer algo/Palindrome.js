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
console.log(isPalindrome('madam'));
console.log(isPalindrome('wow'));
console.log(isPalindrome('raceacar'));
console.log(isPalindrome('mom'));
console.log(isPalindrome('dad'));
console.log(isPalindrome('koushik'));
console.log(isPalindrome('1,2,1'));

function isPalindromeFor(num){
    // let i = 0;
    let size = num.length - 1;

    for(i = 0, k = size; i<=k; i++, k--){
        if(num[i] != num[k]){
            return false;
        }
    }
    return true;
}

console.log(isPalindromeFor('madam'));
console.log(isPalindromeFor('wow'));
console.log(isPalindromeFor('raceacar'));
console.log(isPalindromeFor('mom'));
console.log(isPalindromeFor('dad'));
console.log(isPalindromeFor('koushik'));
console.log(isPalindromeFor('1,2,1'));