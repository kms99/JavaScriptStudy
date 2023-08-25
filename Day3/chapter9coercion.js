//예제 9-1
//명시적 타입 변환 ( explicit coercion )
let x = 10;
let str = x.toString(); // toString()은 원 변수를 변화시키지 않는다.
console.log (typeof x, x);
console.log (typeof str, str);

//암묵적 타입 변환 ( implicit coercion )
x = 10;
str = x+''; //여기서 연산자인 + 는 문자열 연결 연산자로 작동하여 str에는 string type으로 저장됨.
console.log(typeof str, str);




//암묵적 타입 변환
console.log ('10' + 2) //string type '102'
console.log ( 5 * '10' ) //number type 50
console.log (!0) // boolean type true
console.log (!!1) // boolean type true

//1 문자열
console.log (1 + '2') //string type '12', + 연산자가 문자열 연결 연산자로 작용 (피연산자 중 1개 이상이 문자열일 경우)
console.log (`1 + 1 = ${1 + 1}`) //string type '1 + 1 = 2' / ES6에서 도입된 템플릿 리터럴의 표현식 삽입

//number type to string type
console.log (0+'') // string type '0'
console.log (-0+'') // string type '0'
console.log (1+'') // string type '1'
console.log (-1+'') //string type '-1'
console.log (NaN+'') //string type 'NaN'
console.log (Infinity+'') // string type 'Infinity'
console.log (-Infinity+'') // string type '-Infinity'

//boolean type to string type
console.log (true +'') //string type 'true'
console.log (false + '') // string type 'false'

//null type to string
console.log( null+'' ) // string type 'null'

//undefined type to string
console.log( undefined+'') // string type 'undefined'

//Symbol type to string
// console.log(Symbol() + '') // =>TypeError : Cannot convert a Symbol value to a string

//Object type to string
console.log({}+'') // string type '[Object, object]'
console.log(Math +'') // string type '[Object, math]'
console.log([]+'') // ''
console.log([10, 20]+'') //string type '10,20'
console.log(function(){}+'') // string type 'function(){}'
console.log(Array+'') // string type 'function Array(){[native code]}'


//2 숫자타입
// console.log(1-'1') // number type 0
// console.log(1*'10') // number type 10
// console.log(1/'one') //number type NaN, 'one'은 숫자로 변환이 불가능

// console.log('1'>0) //boolean type true, 결과는 boolean 값이지만, 비교 연산 과정에서 string type에서 number type으로 타입변환

// //string type to number type
// console.log(+'') // number type 0
// console.log(+'0') // number type 0
// console.log(+'1') // number type 1
// console.log(+'string') // number type NaN

// //boolean type to number type
// console.log(+true) //number type 1
// console.log(+false) // number type 0

// //null type to number type
// console.log(+null) // number type 0

// //undefined type to number type
// console.log(+undefined) // number type NaN

// //Symbol type to number type
// console.log(+Symbol()) //TypeError : Cannot convert a Symbol value to a number

// //Object type to number type
// console.log(+{}) // number type NaN
// console.log(+[]) // number type 0
// console.log(+[10, 20]) // number type NaN
// console.log(+function(){}) // number type NaN


//3 Boolean타입
// Falsy Value
// false, undefined, null, 0/-0, NaN, ''
// Falsy Value는 거짓(false)으로 판단
// 나머지는 Truthy value로 참(true)으로 판단 
console.log(!!false);
console.log(!!undefined);
console.log(!!null);
console.log(!!0);
console.log(!!(-0));
console.log(!!NaN);
console.log(!!'');

//명시적 타입 변환
//문자열 type
console.log(String(1)) // string type "1"
console.log(String(NaN)) // string type "NaN"
console.log(String(Infinity)) // string type "Infinity"

console.log(String (true)) // string type "true"
console.log(String(false)) // string type "false"

console.log((1).toString()) // string  type "1"
console.log((NaN).toString()) // string type "NaN"
console.log((Infinity).toString()) // string type "Infinity"

console.log((true).toString()) // string type "true"
console.log((false).toString()) // string type "false"

//숫자 type
console.log(Number('0')) // number type 0 
console.log(Number('-1')) // number type -1
console.log(Number('10.53')) // number type 10.53

console.log(true) // number type 1
console.log(false) // number type 0

//parseInt/Float 방식은 문자열 > 숫자 타입만 변환가능
console.log(parseInt('0')) // number type 0 
console.log(parseInt('-1')) // number type -1
console.log(parseFloat('10.53')) // number type 10.53

// boolean type
console.log(Boolean('x')) // boolean type true
console.log(Boolean('')) // boolean type false
console.log(Boolean('false')) // boolean type true
console.log(Boolean(0)) // boolean type false 
console.log(Boolean(1)) // boolean type true
console.log(Boolean(NaN)) // boolean type false 
console.log(Boolean(Infinity)) // boolean type true
console.log(Boolean(null)) // boolean type false
console.log(Boolean(undefined)) // boolean type false
console.log(Boolean({})) // boolean type true
console.log(Boolean([])) // boolean type true

//단축평가
console.log("Cat"&&'Dog'); // return> Dog

console.log ("Cat"||"Dog"); // return > Cat
console.log (""||NaN); // return > Cat

let obj;
console.log (obj?.property); // TypeError
console.log (obj.property); // return > undefined
