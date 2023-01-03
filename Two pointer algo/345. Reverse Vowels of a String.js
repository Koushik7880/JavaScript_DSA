// Two pointers
var reverseVowels = function(s) {
    // Helper function to check if the current letter is a vowel
    function isVowel(letter) {
        const vowels = {
            a: 'a', e:'e', i:'i', o: 'o', u:'u'
        }
        return vowels[letter.toLowerCase()]
    }

    // Left and right pointers
    let left = 0, right = s.length-1
    // Split s into an array so we can swap letters (string are immuatable)
    s = s.split('')
    while(left < right) {
        // Check if pointers are pointing to a vowel
        const l = isVowel(s[left]), r = isVowel(s[right])
        // If both are vowels swap
        if(l && r) {
            const temp = s[left]
            s[left] = s[right]
            s[right] = temp
            left++
            right--
        } else if(!l && !r) { // If both are not vowels move both pointers
            left++
            right--
        } else if(!l) { // Move left pointer
            left++
        } else { // Mover right pointer
            right--
        }
        
    }
    // Join array to a string
    return s.join('');
};

console.log(reverseVowels("hello"));