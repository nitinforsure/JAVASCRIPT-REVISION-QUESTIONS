//to reverse the given string 
function reversestring(str){
    let reversed = "";
    for(let i = str.length-1; i>=0; i--){
        reversed = reversed + str[i];
    }
    return reversed;
}
let input = "aanchal";
console.log(reversestring(input));
