//Chapter04. 변수
//변수는 값을 저장하기 위하여 User 메모리에 접근해 공간을 확보하기 위한 메커니즘

//예제 04-02
//변수는 하나의 값을 저장하기 위한 방법이다
var userId = 1;
var userName = 'Lee';

//객체나 배열 같은 자료구조를 사용하면 여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다.
var user = {id:1, name:'Lee'};
var users = [
    {id:1, name:'Lee'},
    {id:2, name:'Kim'}
];

//예제 04-03
//10+20 의 연산을 통해 나온 값인 30을 result라는 식별자를 가진 변수에 저장한다. 
//result는 메모리 공간의 주소로 치환되어 메모리에 값을 저장한다.
//result를 참조하면 메모리 공간에 저장된 30의 값을 사용할 수 있다.
var result = 10+20;


// 선언되지 않은 식별자에 접근하려 하면 ReferenceError(참조에러)가 발생한다.
// unReference  //오류발생


//var의 변수 호이스팅 문제
//변수 호이스팅이란 최상단 스코프에서 변수의 선언이 이루어지는 것, 선언된 변수는 undefined 값이 초기화됨.
//var는 함수레벨 스코프를 지원한다. 이는 함수 내에서 선언된 변수는 함수 밖에서는 참조할 수 없는것. 이것이 문제가 되는 이유는 함수 밖에서 선언이 된다면 모두 전역변수로 사용이 가능하다는 것.
//이와 반대 개념은 블록레벨 스코프는 try/catch, if, while 등 블록 내에서 선언된 변수는 밖에서는 외부에서 참조가 불가능하다는 것.
// 예제 04-05
console.log(score) //undefined로 초기화, ReferenceError가 발생하지 않음
var score;

//예제 04-08
console.log(hoisting); // undefined
var hoisting; //변수선언, 변수 호이스팅 발생
hoisting = 80; // 값 할당
console.log(hoisting); // 80

//예제 04-09
console.log(hoistingFirst); // undefined
var hoistingFirst=80; //변수선언, 변수 호이스팅 발생, 값은 이후 할당
console.log(hoistingFirst); // 80

//예제 04-10
console.log(hoistingSecond); // undefined
hoistingSecond = 80; // 값 할당
var hoistingSecond; 
console.log(hoistingSecond); // 80


//ES6에서는 var의 호이스팅, 함수레벨 스코프 문제를 해결하기 위해 let, const라는 키워드를 도입
//블록레벨 스코프를 지원하며 자바스크립트 호이스팅 문제를 해결하기 위해서 TDZ(Temporal Dead Zone) 개념 도입
//TDZ는 호이스팅으로 변수가 초기화 되는 것을 방지하기 위한 개념상의 공간
//let과 const의 차이는 let은 변수이고 const는 상수이다(값의 재할당이 불가능, 최초 초기화 필요)

//let 예시
console.log(letTest); // > ReferenceError
let letTest = 'test'; //호이스팅은 발생하지만 let으로 선언된 letTest는 TDZ로 이동하여 초기화X 

//const 예시1
console.log(constTest); // > ReferenceError
const constTest = 'test'; //호이스팅은 발생하지만 const으로 선언된 constTest는 TDZ로 이동하여 초기화X

//const 예시2
const constTestSecond = "test"; // > typeError
constTestSecond = "change"; // const로 선언된 변수는 재할당 불가능

//예제 04-18
//변수선언 시 식별자는 일정한 규칙에 따라야한다. 이를 네이밍컨벤션이라고 한다.
var firstName; //일반적으로 변수나 함수이름 지정시 사용, 카멜케이스(camelCase)
var first_name; //스네이크 케이스(snake_case)
var FirstName; //일반적으로 클래스이름, 생성자함수 이름 지정시 사용, 파스칼 케이스(PascalCase)
//헝가리언케이스(typeHungarianCase)
var strFirstName;
var $elem = document.getElementById('Id'); //Dom 노드
var observable$ = fromEvent(document,'click'); // RxJS 옵저버블
