// 내부 슬롯 [[Prototype]]에 접근하는 방법 .__proto__
const o ={};
// console.log(o.[[Prototype]]); // SyntaxError
console.log(o.__proto__); // [Object: null prototype] {}


//프로퍼티 어트리뷰트 내부슬롯에 접근하기 위한 Object.getOwnPropertyDescriptor메서드
const person={
    name:'Lee',
}

//{ value: 'Lee', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(person,'name')); 

// 동적 추가
person.age = 11;
//{ value: 11, writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(person,'age'));


console.log(Object.getOwnPropertyDescriptors(person)); 




// 접근자 프로퍼티 프로퍼티 디스크립터 확인
const user = {
    name:'kim',
    age:'11',
    get userName(){ // 접근자프로퍼티 getter 함수
        return `${this.name}의 나이는 ${this.age}입니다.`
    },
    set userName(userInfo){ // 접근자프로퍼티 setter 함수
        [this.name, this.age] = userInfo;
    }
}
// getter함수로 객체 내 데이터 프로퍼티 값 접근
console.log(user.userName);

// setter함수로 객체 내 데이터 프로퍼티 값 저장
user.userName=['lee',25];
// getter함수로 setter함수가 실행되었는지 확인
console.log(user.userName);

// 접근자 함수의 프로퍼티 디스크립터 객체
console.log(Object.getOwnPropertyDescriptor(user,'userName'))
/*
    {
        get: [Function: get userName],
        set: [Function: set userName],
        enumerable: true,
        configurable: true
    }
*/


// 프로퍼티 어트리뷰트 지정
const person2={};

// 프로퍼티 어트리뷰트를 프로퍼티 선언과 동시에 지정해준다.
Object.defineProperty(person2, 'name', {
    value : 'kim',
    writable : 'true',
    enumerable : 'true',
    configurable : 'true',
});

// 어트리뷰트를 지정하지 않으면, 기본적으로 false로 판단한다.
Object.defineProperty(person2,'age',{
    value:24,
})

console.log(Object.getOwnPropertyDescriptors(person2));
/*
    {
    name: {
        value: 'kim',
        writable: true,
        enumerable: true,
        configurable: true
    },
    age: {
        value: 24,
        writable: false,
        enumerable: false,
        configurable: false
    }
    }
*/

// Writable : false, 쓰기 
console.log(person2.age); // 24
person2.age = 30;
console.log(person2.age); // 24

// enumerable : false, 열거
console.log(Object.keys(person2)); // ['name']

//configurable: false, 재정의
delete person2.age;
console.log(person2.age); //24

// 여러 프로퍼티 정의
Object.defineProperties(person2,{
    nation : {
        value : 'Korea',
        writable: true,
        enumerable: true,
        configurable: true
    },
    phoneNum : {
        value : '010-0000-0000',
        writable: true,
        enumerable: true,
        configurable: true
    }
})
