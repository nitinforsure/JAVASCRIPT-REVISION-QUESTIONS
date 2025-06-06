//convert [1, [2,[3,[4]],5]] into [1,2,3,4,5].
const arr1 = [1, [2,[3,[4]],5]];
const flatarr1 = arr1.flat(4);
console.log(flatarr1);
//flat(depth) flattens the array to the given depth.
//If you're unsure of depth, use .flat(Infinity) to flatten everything:
