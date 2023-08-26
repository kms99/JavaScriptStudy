// Chapter 10. Object literal
// 객체를 생성할 수 있는 여러가지 방법 중 객체 리터럴 방식으로 생성하는 방식을 공부

// 예제 10-01
let person = {
    name:'Kim', //=> 프로퍼티 (key와 값으로 이루어진 것)
    age : 25, //=> key : age, value : 25

    sayHello : function(){ //=> 메서드
        console.log(`Hello! My name is ${this.name}`);
    }
}; // 객체의 중괄호는 리터럴방식으로 생성할 때 사용하며, 코드블럭이 아닌 객체 리터럴이기 때문에 세미콜론을 입력해야한다.

person.sayHello();

//예제 10-02
let empty={}; //빈 객체
console.log(typeof empty); //object

//프로퍼티는 식별자 네이밍 규칙을 따르거나 따르지 않을 경우에는 문자열로 묶어야한다.
//예제 10-04
let user = {
    firstName : 'sub', // 자바스크립트이 식별자 네이밍 규칙을 준수하는 경우
    'lase-name' : 'Kim' // 자바스크립트의 식별자 네이밍 규칙을 준수하지 않는경우 문자열로 키생성
}

//예제 10-06
let obj = {}; //빈 객체
let key = 'hello';

obj[key] = 'world'; //대괄호를 이용하여 프로퍼티를 동적으로 생성 가능

console.log(obj)

// 객체에 묶여있는 함수 = 메서드
var circle ={
    radius : 5,

    getDiameter : function(){ //메서드
        return 2 * this.radius;
    }
};

// 객체의 프로퍼티에 접근하는 방법 2가지
console.log(circle.radius);
console.log(circle['radius']);
 
// 프로퍼티의 값을 변경하는 갱신하는 방법

obj = {
    prompTest : 'test'
};

obj.prompTest = 'test1';
console.log(obj.prompTest);
obj['prompTest']='test2';
console.log(obj.prompTest);

//프로퍼티의 값을 동적으로 생성하는 방법
obj.prompTest1 = "add test";
console.log(obj);

//프로퍼터의 값을 삭제
delete obj.prompTest1
console.log(obj);
