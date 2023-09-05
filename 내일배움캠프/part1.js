'use strict';

alert("자바스크립트! HTML 외부 스크립트 파일");

/* 내일배움캠프 사전캠프 JavaScript HandBook part 01. Hello World */

// 문 : 어떤 작업을 수행하는 문법구조와 명령어
console.log('Hello'); console.log('World'); //가독성 떨어짐

console.log('Hello'); //줄바꿈을 통해 가독성이 높아짐
console.log('World'); 

// 세미콜론은 줄바꿈이 있다면 생략이 가능하다.
// console.log('Hello') console.log('World') // SyntaxError발생
console.log('Hello') // 세미콜론 자동삽입
console.log('World')

// 불완전한 표현식
console.log(1 // 표현식이 마무리 되지 못한 상태에서는 세미콜론 자동삽입이 일어나지 않음
    +
    2);
