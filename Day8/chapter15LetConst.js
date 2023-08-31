// let 키워드 변수 중복 선언
let foo = 100;
// let foo = 200; // SyntaxError : Identifier 'foo' has already been declared

// let 키워드 블록레벨스코프

let i = 100;

for(let i=0; i<5; i++){
    console.log(`local 'i' : ${i}`);
}

console.log(`global 'i' : ${i}`);

// const 키워드 특징
const TAX_RATE = 0.1; // 일반적으로 대문자를 사용하며 스네이크 케이스를 사용한다. 

let price = 1000;

let afterTexPrice = price + (price*TAX_RATE);
console.log(afterTexPrice);

// const tax; // SyntaxError : Missing initializer in const declaration

const person={
    name:'Kim',
    age:25
}

person.age =24;

console.log(person); // { name: 'Kim', age: 24 }
