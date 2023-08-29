//함수 선언문
function add(a,b){
    return a+b;
}

console.log(add(1,2));

//함수 리터럴
let f = function add(x,y){
    return x+y;
}

console.log(f(1,2));

//함수 선언문 , 표현식 x
function sum (x,y){
    return x+y;
}

//함수 선언문과 리터럴의 해석
// function 정의부가 값으로 평가되어야 하는 문맥이기에 해당 코드에서 함수의 정의는 리터럴로 해석
let sum1 = function sum1 (x, y){
    return x+y;
}
// function 정의부가 표현식을 요구하지 않는 문맥이기에 해당 코드에서 함수의 정의는 선언문으로 해석
function foo (){console.log('foo')};

// (function bar(){console.log('bar');});/
// bar(); // 참조 오류, 해당 코드는 그룹연산자 내에서 정의되었기에 표현식이여한다. 따라서 리터럴형식이며, 함수이름 말고 식별자가 정의되지 않았기 때문에 참조오류 발생, 함수이름은 외부에서 접근할 수 있는 식별자가 아님

//함수 표현식
// let add = function (x,y) {
// 	return x+y;
// };

// console.log(add(5,6));//11

//함수 호이스팅
hoisting();

function hoisting(){
    console.log('hoisting');
}

//Function 생성자 함수 (자바스크립트 빌트인 함수)
let addNum = new Function('x','y','return x+y');
console.log(addNum(2,5)); // 7

//화살표 함수
const addEvent = (x,y) => x+y;
console.log (addEvent(2,5)); //7

//함수의 호출
// function add(x, y){
//     return x+y;
// }

// console.log(add(1,2));

//매개변수보다 인자의 개수가 더 많을 때 arguments
// function argTest(x, y){
//     console.log(arguments);
//     return x+y;
// }

// console.log(argTest(1,2,3));

//매개변수의 타입지정
function argTest(x, y){
    return x+y;
}

console.log(argTest('a',2));


//매개변수 인자 체크
// function argCheck(x,y){
//     if(typeof x !== 'number' || typeof y !=='number') {
//         throw new TypeError('모든 인수는 숫자 값이여야합니다');
//     }

//     return x+y;
// }

// // y에 undefined 타입이 할당
// console.log(argCheck(2));
// // x, y에 문자열 타입이 할당
// console.log(argCheck('a','b'));

//매개변수 인자 개수 체크 (단축평가)
function argNumCheck(x,y,z){
    x = x||0;
    y = y||0;
    z = z||0;

    return `${x}+${y}+${z} = ${x+y+z}`;
}

// y에 undefined 타입이 할당
console.log(argNumCheck(2,3));
console.log(argNumCheck(2,3,4));

//매개변수 인자 개수 체크 (ES6 매개변수 기본값)

function argNumCheckES6(x=0, y=0, z=0){
    return `${x}+${y}+${z} = ${x+y+z}`;
}

console.log(argNumCheckES6(2,3));
console.log(argNumCheckES6(2,3,4));

// 반환문
function multiply(x,y){
    return x*y;
    console.log(x*y); // 실행안됨
}

console.log(multiply(3,5)) //15

//참조에 의한 전달

let person = {name:'Kim'};
let num = 1;

function user (primitive, obj){
    primitive = 10;
    obj.name = 'Lee'
}

user(num, person);

console.log(person);
console.log(num);

//즉시 실행 함수
(function test(){
    console.log("이 함수는 즉시 실행 함수입니다.");
}());

//재귀함수
function countdown(n){
    for(let i=n;i>0;i--) console.log(i);
}

countdown(10);
// 위 코드를 재귀함수로 
function count(n){
    if(n<=0) return; 
    console.log(n);
    count(--n);
}

count(10);

//중첩함수
function outer(){
    let x = 1;
    
    function inner(){
        let y=2;
        console.log (x*y);
    }

    inner();
}

outer();

//콜백함수
function repeat(n, f){
    for(let i = 0; i<n; i++){
        f(i);
    }
}

let logAll = function(i){
    console.log(i);
}

repeat(5,logAll);