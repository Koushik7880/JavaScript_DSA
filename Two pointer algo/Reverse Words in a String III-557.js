


var reverseWords = function(s) {
    // step 1: tokenized s into words
    let tokens = s.split(' ');

    // step 2: revarse each word

    for(let i = 0; i < tokens.length; i++){
        let characters = tokens[i].split('');
        characters.reverse();
        tokens[i] = characters.join('');
    }
    // step 3: join the revarsed word into a new sentence
    return tokens.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));