let arr = [1,2,3,4,5];

arr.push(6); //add at the last index 

arr.unshift(0); // add at 0th index

arr = arr.reverse();

console.log('reverse with adding 6 on the end and 0 at the first place:' , arr);

let arr1 = [1,2,3,4,5];

let arr2 = [5,6,7,8,9,10];

let arr3 = arr1.slice(0,arr1.length - 1).concat(arr2);

console.log('concat with not repeating 5: ' , arr3);
