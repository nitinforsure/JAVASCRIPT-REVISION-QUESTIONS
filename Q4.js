// Merge two arrays and remove duplicates.
const arr1 = [1,2,3,4];
const arr2 = [4,5,6,7];
function toMerge(arr1,arr2){
 return  arr1.concat(arr2.filter(item=> !arr1.includes(item)));
}
let newArr = toMerge(arr1,arr2);
console.log(newArr);