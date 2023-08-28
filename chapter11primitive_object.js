let str = 'string';

//문자열은 유사배열의 특징을 가져 인덱스로 접근가능, for 반복문으로 순회도 가능
console.log(str[0]); // 's'

//문자열은 객체처럼 동작
console.log(str.length); // 6
console.log(str.toUpperCase()); //'STRING'

// 그래도 문자열은 불변성을 가지는 원시값
str[0]= 'k';

console.log(str); //'string'

// 값의 의한 전달 (변수 자체를 새로운 변수에 초기화한다면, 기존 변수의 있는 값을 복사! 하여 그 값을 새로운 공간에 할당)
let score = 80;
let copy = score; // 변수 식별자로 초기화

console.log(score); //80
console.log(copy); //80

score = 100;

console.log(score); //100
console.log(copy); //80

// 객체- 변경가능한 값
let person = {
    name:'Kim'
};

person.name = 'Lee'; // 프로퍼티 값 갱신, 변경
person.city = 'Seoul'; // 프로퍼티 값 동적 추가

console.log(person); // {name:'Lee', city:'Seoul'}

// 객체 - 참조에 의한 전달
let user = {
    name:'Kim'
}

//참조 값을 복사 (얕은 복사)
let anotherUser = user; 

anotherUser.name='Lee';
console.log(user) // {name:Lee}