//스코프, 함수에서의 매개변수로 알아보자
function add (a,b) {
    console.log(a+b);
    return a+b;
}

add(2,3);

// console.log(a,b)//ReferenceError


//선언된 변수의 스코프 
var var1 = 1;
 
if (true) {
    var var2 = 2;
    if(true) {
        var var3 = 3;
    }
}

function foo(){
    var var4 = 4;

    function bar(){
        var var5=5;
    }
}

console.log(var1) // 1
console.log(var2) // 2
console.log(var3) // 3
// console.log(var4) // ReferenceError
// console.log(var5) // ReferenceError


// 지역변수와 전역변수
var x = 'global'; // 전역변수

function foo(){
    var x = 'local'; //지역변수
    console.log(x); // 지역변수 x의 'local'
}

foo();

console.log(x) // 전역변수 x의 'global'


// 전역과 전역스코프
var x = "global x"; //전역스코프 / 전역변수
var y = "global y"; //전역스코프 / 전역변수

function outer(){
    var z = "outer's local z"; //지역스코프 / 지역변수

    console.log(x); // 전역변수 x 참조 "global x"
    console.log(y); // 전역변수 y 참조 "global y"
    console.log(z); // outer함수의 지역변수 z참조 "outer's local z"

    function inner() {
        var x = "inner's local x" //지역스코프 / 지역변수

        console.log(x); // inner함수의 지역변수 x 참조 "inner's local x"
        console.log(y); // 전역변수 y 참조 "global y"
        console.log(z); // outer함수의 지역변수 z참조 "outer's local z"
    }

    inner();
}
outer();
console.log(x); // 전역변수 x 참조 "global x"
// console.log(z); // ReferenceError / 가장 바깥 부분에서는 함수내부에 선언된 지역변수 참조가 불가능


// 스코프 체인을 통한 함수 탐색
function fun1(){
    console.log('global function fun1');
}

function fun2(){
    function fun1 (){
        console.log('local function fun1');
    }
    fun1(); // local fun1
}

fun2();



//함수레벨스코프 문제점
var i =10;

for(var i =0; i<5; i++){
    console.log(i); //0, 1, 2, 3, 4
}

console.log(i); //5

//렉시컬 스코프
var x =1;
function lex(){
    var x =10;
    lexicalTest();
}

function lexicalTest(){
    console.log(x); // 1
}

lex();
lexicalTest();