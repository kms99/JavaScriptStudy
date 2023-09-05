//숫자형
let n = 123; // 숫자형 (정수)
n = 12.345;  // 숫자형 (부동소수점 숫자)
n = Infinity // 숫자형 (특수숫자, 양의 무한대)
n = -Infinity // 숫자형 (특수숫자, 음의 무한대)
n = NaN // 숫자형 (특수숫자, Not a Number)

//BigInt형 (+/-2^53-1)보다 큰 정수를 표현할 때 사용
let bigInt = 1234567890123456789012345678901234567890n;

//문자형
let str = 'Hello';
let str2 = "Hello World";
let phrase = `str == ${str} / str2 = ${str2}`;

//불린형
let check = true;
let check2 = false;
let isGreater = 4>1; // true

//null
let age = null;

//undefined
let undef; // undefined

//type of 
console.log(typeof 'hello');
console.log(typeof 123n);

