//Problem: Given an array of words, return the longest one.
function FindlongestWord(words){
    let longest = "";
    for(let word of words){
    if(word.length > longest.length){
             longest = word;
    }
        
    }
    return longest;

}
const words = ["apple","guvava","sitaphal","watermelon","carrot"];
let longest = FindlongestWord(words);
console.log(longest);