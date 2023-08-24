//예제 05-01 
// 10+20 은 평가(expression) 되어 30을 생성한다.
10+20; //30

//예제 05-02
//변수에는 10+20이 평가(expression)되어 생성된 숫자 값 30이 할당된다.
var sum = 10+20; //할당 되는것은 10+20이 아닌 평가된 값 30

//리터럴(literal)은 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법(notation)
//ex) '', {}, [], function(){} 등

//표현식(expression)은 값으로 평가될 수 있는 문(statement)이다.
//값으로 평가되는 리터럴 역시 표현식이다.
var expressionFir = 100; //리터럴 100은 값으로 평가되기 때문에 표현식
var expressionSec = 50+50; // 50+50은 100으로 평가되기 때문에 표현식
console.log(expressionFir); // 값을 생성하지는 않지만 값으로 평가되기 때문에 표현식 (참조는 표현식)

// 예제 05-07
// 리터럴 표현식 
10;
'Hello';

//식별자 표현식
expressionFir;
person.name;
arr[1];

//연산자 표현식
10 + 20;
a = 10;
a !== 10;

//함수.메서드 호출 표현식
square();
person.getName();

//문(statement) = 명령문 : 프로그램을 구성하는 기본단위이자 최소 실행 단위
//토큰 (token) : 문법적 의미를 가진 것 중 더이상 쪼갤수 없는 단위
//예제 05-09
//변수 선언문
var x;
//변수 할당문
x=10;
//함수선언문
function foo (){};
//조건문
if(x>1){console.log(x);}
//반복문
for(var i=0;i<10;i++){console.log(i);} 
