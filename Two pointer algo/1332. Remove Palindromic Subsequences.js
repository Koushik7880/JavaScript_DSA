// https://dev.to/rohithv07/1332-remove-palindromic-subsequences-leetcode-easy-33ji

// 1) Check if given string empty, if true return 0.
// 2) Take 2 pointers left = 0, right = stringLength - 1
// 3) while left < right, do the following
// -> check for palindromic condition, if fails return 2 else continue until the loops gets over.
// 4) return 1.

// here there are 3 conditions that we want to consider
// 1. if the string is empty, then return 0. This can be our first check.
// 2. Next one is checking palindrome or not. If the whole string is palindrome, then we can delete it completely. So return 1.
// 3. The next one is either we can remove a completely then b or vice versa. So in this case number of steps will be only 2. 
    // That is first step can be to remove all 'a's and the second step is remove all 'b's.
    var removePalindromeSub = function(s) {
        if(!s){
            return 0;
        }
    
        let left = 0;
        let right = s.length - 1;
        while(left < right){
            if(s.charAt(left) == s.charAt(right)){
                left += 1;
                right -= 1;
            }
            else 
                return 2;
        }
        return 1;
    };