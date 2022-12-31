var reversePrefix = function(word, ch) {
    let len =word.search(ch);
    let st="";
    if(len>0){
     for(let i=len; i>=0;i--){
         st+=word[i];
        
     }
     for(let j=len+1; j<=word.length-1;j++){
         st+=word[j];
     }
     return st;
    }else{
     return word;
    }
    console.log(len);
 };
 
 console.log(reversePrefix("abcdefd","d"));