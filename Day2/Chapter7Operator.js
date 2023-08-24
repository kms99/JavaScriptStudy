//예제 07-01
//산술 연산자
5*4 // =>20
// 문자열 연산자
'My name is' + 'Lee'//=> 'My name is Lee'
// 할당 연산자
color = 'red'// => 'red'
// 비교 연산자
3 > 5 //=> false
// 논리 연산자
true && false // => false
// 타입 연산자
typeof 'Hi' // =>'string'

//예제 07-02
5+2; //=> 7
5-2; //=> 3
5*2; //=> 10
5/2; //=> 2.5 (숫자 데이터 타입은 소수로 처리)
5%2; //=> 1 
console.log('hi' + 3) //=> hi3

//예제 07-03
let x = 1;

// ++ 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이루어진다.
x++; // x= x+1;
console.log(x); //=> 2

// -- 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이루어진다.
x--;
console.log(x); //=> 1

console.log(+10); //=>10, 아무런 효과가 없다.
console.log(+(-10)); //=>-10, 아무런 효과가 없다.

console.log(-(10)); //=>-10, 양수가 음수로 반전된다.
console.log(-(-10)); //=>10, 음수가 양수로 반전된다.


// //전위 증가/감소 연산자 : 피연산자 앞쪽에 ++/-- 가 위치하며 피연산자가 먼저 증가/감소 후 표현식이 실시된다.
// let y = 1; 
// let z = ++y;  // 먼저 y에 ++에 의한 증가가 이루어지고 z에 대입이 이루어진다. 
// console.log('y :',y,'/z: ',z); //=> y: 2 / z: 2

// z = --y; //먼저 ydp --에 의한 감소가 이루어지고 z에 대입이 이루어진다.
// console.log('y :',y,'/z: ',z); //=> y: 1 / z: 1


//후위 증가/감소 연산자 : 피연산자 뒷쪽에 ++/-- 가 위치하며 표현식 실시 후 피연산자의 증가/ 감소가 실시된다.
let y = 1; 
let z = y++;  // 먼저 y에 ++에 의한 증가가 이루어지고 z에 대입이 이루어진다. 
console.log('y :',y,'/z: ',z); //=> y: 2 / z: 1

z = y--; //먼저 ydp --에 의한 감소가 이루어지고 z에 대입이 이루어진다.
console.log('y :',y,'/z: ',z); //=> y: 1 / z: 2


//예제 07-09
let num = 1;

num = 10; //=> 10
num += 5; //=> 15
num -= 5; //=> 10
num *= 5; //=> 50
num /= 5; //=> 10
num %- 5; //=> 2

let str = "My name is";
str += 'Kim'; //=> My name is Kim

//예제 07-10, 11, 할당문은 표현식이다.
// let num = 1;
// console.log(num=10); // => 10

var a, b, c;
a = b = c =10;
console.log (a, b, c); //=> 10 10 10

let k = 10;
let result = k==10 ? "참" : "거짓"
console.log (result); // 참

//예제 07-25
true || true; // => true
true || false; // => true
false || true; // => true
false || false; // => false

true && true; // => true
true && false; // => false
false && true; // => false
false && false; // => false

!true; // => false
!false; // => true
