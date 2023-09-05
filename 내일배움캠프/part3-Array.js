let array = ['a','b','c','d','e'];
// let popItem = array.pop();
// console.log(array, popItem);
// let shiftItem = array.shift();
// console.log(array, shiftItem);

let subArray = array.slice(1,3);
console.log(subArray);

let newArray = array.concat(1,2,[3,4]);
console.log(newArray);

let test = {
    name:'kim',
    age:11
}

console.log(Array.from(test));
