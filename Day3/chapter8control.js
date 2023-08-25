// 예제 08-01, 블록문
// 블록문
{
    let foo = 10;
}

// 제어문
let x = 1;
if(x<10){
    x++;
}

// 함수 선언문
function sum(a,b){
    return a+b;
}


//예제 08-02
let num = 2;
let kind;

if (num>0){
    kind = '양수';
}
else if (num<0){
    kind = '음수';
}
else {
    kind = '0'
}

console.log(num,':', kind); 

// 삼항연산자 변환
kind = num !==0 ? (num>0 ? '양수' : '음수') : '0';
console.log(num,':', kind); 

//예제 08-07
let month = 11;
let monthName; //undefined

switch (month){
    case 1 : monthName = 'January';
        break;
    case 2 : monthName = 'February';
        break;
    case 3 : monthName = 'March';
        break;
    case 4 : monthName = 'April';
        break;
    case 5 : monthName = 'May';
        break;
    case 6 : monthName = 'June';
        break;
    case 7 : monthName = 'July';
        break;
    case 8 : monthName = 'August';
        break;
    case 9 : monthName = 'September';
        break;
    case 10 : monthName = 'October';
        break;
    case 11 : monthName = 'November';
        break;
    case 12 : monthName = 'December';
        break;
    default : monthName = 'Invalid Month';
}

console.log(month, 'is', monthName); //11 is November

// for 반복문 예제
for (let i =0 ; i<5; i++){
    console.log('i: ',i); 
}

for (let i=0; i<6; i++){
    for (let j=0; j<6; j++){
        if(i+j === 6) console.log('[',i,',',j,']');
    }
}

// while, do while 반복문 예제
let count = 0;
while(count<0) {
	console.log('while count is ', count);
	count++;
}

count = 0;
do{
    console.log('do while count is ', count);
    count++;
}while(count<0)

count = 0;
while(true){
    count ++;

    if (count===10){
        break;
    }
}


//break문 예제
outer : for (var i =0; i<3; i++){
    for (var j =0; j<3; j++){
        if(i+j===3) break outer;
    }
}

//continue문 예제
let string = "Hello World";
let search = "o";
let count_search=0;

for(let i=0;i<string.length;i++){
    if(string[i]!==search) continue;

    count_search++;
}

console.log(count_search);
 
