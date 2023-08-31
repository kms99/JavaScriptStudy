//전역변수의 생성과 소멸
function foo () {
    console.log(x)
    var x ='local'
    console.log(x)
    return x;
}

foo();
// console.log(x); //ReferenceError

//전역변수 억제법 - 즉시실행함수
(function(){
    var num =100;
}())

// console.log(num); //ReferenceError


//전역변수 억제법 - 네임스페이스객체
var MYAPP = {};

MYAPP.name ='Lee';

console.log(MYAPP.name);


// 전역변수 억제법 - 모듈패턴
var Counter = (function(){
    var number = 0;

    return {
        increase(){
            return ++number;
        },
        decrease(){
            return --number;
        }
    }
}())

console.log(Counter.number);
console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.decrease());
console.log(Counter.decrease());
