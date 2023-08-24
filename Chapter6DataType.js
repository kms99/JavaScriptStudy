//숫자타입
var integer = 10; //정수
var double = 10.12; //실수
var negative = -20; //음의 정수

var binary = 0b01000001; //2진수
var octal = 0o101; //8진수
var hex = 0x41; //16진수

console.log(binary); //65
console.log(octal); //65
console.log(hex); //65

//숫자타입은 소수로 처리된다.
console.log(1===1.0);//true
console.log(4/2); //2
console.log(3/2); //1.5

//64bit 부동소수점 형식의 한계
console.log(0.3===0.1+0.2);

//숫자타입의 특별한 값
console.log(10/0); //infinity
console.log(10/-0); //infinity
console.log(1*'string'); //NaN(Not a Number의 약자)


//문자열타입
console.log('작은 따옴표 문자열');
console.log("큰 따옴표 문자열");
console.log(`백틱 문자열`);

console.log('작은 따옴표 문자열 안에 "큰 따옴표"'); //작은 따옴표 문자열 안에 "큰 따옴표"
console.log("큰 따옴표 문자열 안에 '작은 따옴표'"); //큰 따옴표 문자열 안에 '작은 따옴표'

//백틱
console.log(`저는
백틱입니다.`);

console.log('나도 \n줄바꿀 수 있어');

let number = 10;
console.log(`나는 표현식도 출력할수 있어 ${number}`); //나는 표현식도 출력할수 있어 10 
console.log(`나는 표현식도 출력할수 있어 ${10+20}`); //나는 표현식도 출력할수 있어 10 
let user = "Kim";
console.log(`내 이름은 ${user} 이야`); //내 이름은 Kim 이야

//Boolean타입
let trueCase = true;
console.log(trueCase); //true

let falseCase = false;
console.log(falseCase); //false

let num = 10;
console.log(num == 10); //true
console.log(num == 100); //false

//undefined 타입
console.log(undefinedCheck); //undefined
var undefinedCheck;

//null 타입
var nullCheck = "abc";
nullCheck = null; //소멸

//Symbol 타입
let key = Symbol('key')
console.log (typeof key) // symbol

let obj = { key:'value' }

console.log (obj.key) // value
