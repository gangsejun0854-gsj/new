// https://runjs.app/play

/*
여러줄
주석
*/
// 한 줄 주석
// html -> CSS -> JS 입히는 방식으로 화면을 렌더링하기 때문에 하나의 파일에 이 코드들을 작성할 때는 BODY의 맨 마지막에 <script> </script> 사이에 작성합니다.

/* 
1. 변수 
선언과 할당으로 변수를 만들 수 있습니다. 
- var 매번 만들고 지우기 가능
- let 값 바꾸기 가능 새로 지우거나 넣기 불가능
- const 고정
*/
let a = 1;






// 코드가 길어지면, 여러사람이 작업을 하게 되면 var는 권장되지 않습니다. 
// const로 다 만들고 나서 변경이 필요해지는 변수들은 let으로 바꾸기를 권장합니다. 

/*
2. 변수 명명규칙
- camelCase 또는 snake_case를 권장합니다.
- class를 만들때는 PascalCase를 씁니다.
- 숫자, _, $을 변수명에 사용 가능합니다. 근데 숫자는 맨 앞에는 들어올 수 없습니다.
- 공백, 마침표, 자바스크립트가 이미 쓰는 keyword(예약어)는 불가합니다.

var _num_fi1x = 1

3. 자료형 
- 기본자료형(primitive, 원시자료형), 참조자료형(reference, JS에서는 모두 object로 찍힘)  
  - number(숫자) 소수, 정수 포함
  - string(문자열)
  - boolean: true, false로 반환
  - null: 값이 없음. 자료형은 object로 찍힘. 웬만하면 우리가 작성하는 빈방에는 null로 채웁니다.
  - undefined: 정의되지 않음
      - 값을 대입하지 않은 변수 / 리턴이 없는 함수의 실행 결과 / 존재하지 않는 속성을 가리킬 때 자바스크립트가 돌려주는 결과
  - symbol: 고유하고 변경할 수 없는 값. 
  - bigint: 안전한 정수 범위를 넘어서는 정수값을 표현할 수 있는 자료형. 2^53-1까지 안전하게 표현 가능.
  - object: 객체
    - 배열, 날짜, 함수, Map, Set, 정규식
*/
// var num1 = 1
// typeof num1; // number
// console.log(typeof(num1)); // number

// var str = "'안녕하세요'"
// console.log(str); // string

// -3. boolean - 소문자로 작성합니다: true / false


// -4. null
// 'object'로 자료형이 찍힘. 자바스크립트의 자체 버그. 그러나 그대로 유지되고 있습니다.
//null 개발자가 의도적으로 값이 없음을 명시할 때 사용합니다.
//undefined - 자바스크립트가 의도적으로 값이 없음을 명시할 때 사용합니다.



/* 실습:
- alert() - 출력만 가능한 팝업을 띄우는 함수
- confirm() - true, false 값만 입력받을 수 있습니다.
- prompt() - 값을 직접 입력받을 수 있습니다. input()

mathScore 라는 변수에 수학점수, engScore라는 변수에 영어점수를 입력받고 
그 결과를 avgScore라는 변수에 (mathScore+engScore)/2 
평균값을 저장합니다. 
 */ 
// console.log(Number("평균80"));
// var mathScore = prompt("수학점수와 영어점수 입력하세요");
// var engScore = prompt("영어점수를 입력하세요");
// var avgScore = (Number(mathScore) + Number(engScore)) / 2;



/* 4. 연산자 우선순위 - 다른언어와 같습니다
  1) ( )- 감싸준 연산자가 제일 상위에 동작
  2) ** 제곱
  3) -, 음수부호 
  4) * / %(나머지) 
  5) +, - 연산이 동작합니다.
  6) ++, --   a -=  1   a--(후위식) / --a(전위식)
*/

// num  = 0
// console.log(++num); // 0


/* 5. 비교연산자
== (항등연산자, 동등성 비교): 값이 같은지
=== (완전항등연산자, 동일성 비교): 자료형, 값까지 비교
=== 을 권장합니다.

*/




/* 
6. 논리연산자 &&(and), ||(or), !(not) 
*/



// 7. 조건문 : if ~ else if ~ else / switch ~ case 문이 존재합니다. 


/* 실습1: 아래 자바스크립트가 제공하는 Date 객체를 활용하여
현재 시간이 12시보다 작은 시간이면 AM, 큰 시간이면 PM을 출력하는 시계를 만들어 주세요. */
// let date = new Date() // 현재 날짜와 시간 기준으로 생성
// date = new Date("2025/12/25"); // 입력받은 문자열을 파싱하여 생성 - 한국시간대라서 -9해서 출력됨
// date
// date.getFullYear();
// date.getMonth()+1; // 월이 0부터 시작함 
// date.getDate();
// date.getDay(); // 0(일) ~ 6(토)
// date.getHours(); // 0 ~ 23
// date.getMinutes(); // 0 ~ 59

// let hours = date.getHours();

// if (hours < 12) {
//   console.log(`AM ${hours} 시`)
//   // else 이면 PM 
// } else {
//   console.log(`PM ${hours} 시`)
// }


// const now = new Date();



// const koreaHour = new Intl.DateTimeFormat("ko-KR", {
//   timeZone: "Asia/Seoul",
//   hour: "2-digit",
//   hour12: false
// }).format(now);

// const hour = Number(koreaHour);

// if (hour < 12) {
//   console.log("AM");
// } else {
//   console.log("PM");
// }

/* swtich (명제) {
    case (1) : 조건 만족시 실행문
               break;
    case (2) : 조건 만족시 실행문
               break;
    default: 위의 모든 조건을 만족하지 못할 경우 실행문 
              break; // 마지막이면 안 걸어도 됩니다.
}
*/

var menu = "마라탕";

// switch (menu) {
//   case "짜장면":
//     console.log(menu + "을 드시는군요.");
//     break;
//   case "짬뽕":
//     console.log(menu + "을 드시는군요.");
//     break;
//   case "샐러드":
//     console.log(menu + "을 드시는군요.");
    
//   default:
//     console.log("그럼 뭐 드실래요?");
//     break;
// }

// if (menu === "짜장면")
// {
//   console.log(menu + "을 드시는군요.");
// }
// else if (menu === "짬뽕")
// {
//   console.log(menu + "을 드시는군요.");
// }
// else if (menu === "샐러드")
// {
//   console.log(menu + "을 드시는군요.");
// }
// else
// {
//   console.log("그럼 뭐 드실래요?");
// }


// if (menu === "짜장면" || menu === "짬뽕" || menu === "샐러드") {
//   console.log(menu + "을 드시는군요.");
// } else {
//   console.log("그럼 뭐 드실래요?");
// }


// (menu === "짜장면" || menu === "짬뽕" || menu === "샐러드") ? console.log(menu + "을 드시는군요.") : console.log("그럼 뭐 드실래요?");

// // 복합조건문: 연산자 && (and) / || (or) / ! (not) 으로 여러개 조건을 한번에 비교할 수 있습니다.
// if (menu === "짜장면" || menu === "짬뽕" || menu === "샐러드") { // 조건1 
//   console.log(menu + "를 드시는군요.") // 참일 경우의 동작은 같으므로 
// } else {
//     console.log("그럼 뭐 드실래요?")
// }

// console.log("------------맨 앞의 값만을 가지고 사용한다. --------------")
// switch (menu) {
//   case ("짜장면" || "짬뽕" || "샐러드"): // 맨 앞의 것만 비교하고 아니면 넘어갑니다.(단락평가)
//     console.log(menu + "를 드시는군요 ")   
//     break;   
//   default: // 셋 다 참이 아닐 경우 (else)
//     console.log("그럼 뭐 드실래요?")
// } 

/* 실습2: if / switch 문으로 각각 작성해보세요.
1. 짜장면  2. 짬뽕   3. 샐러드 중 하나를 받으면 
menu + 를 드시는군요. 를 출력
1, 2, 3 이 아닌 경우는 '그럼 뭐 드실래요?'를 출력해보세요. */


// 삼항연산자 - 불표현식 ? 참 : 거짓

// 1. var age라는 변수에 나이를 입력받고, 나이가 18보다 적으면 미성년자 18 이상이면 성인을 출력하는 조건문

// 2. 나이가 13살 미만이면 어린이 / 18 미만이면 미성년자 / 18 이상이면 성인

// console.log("------------삼항연산자--------------")

// 1. var age = Number(prompt("나이를 입력하세요."));
// age < 18 ? console.log("미성년자") : console.log("성인");


// if (age < 13) {
//   console.log("어린이");
// } else if (age < 18) {
//   console.log("미성년자");
// } else {
//   console.log("성인");
// }

// var age = -1;

// // if (0 < age < 18) { 자바스크립트에서는 비교 불가}
// if (0 < age && age < 18) {
//   console.log("미성년자");
// } 
// else if (age >= 18) {
//   console.log("성인");
// }
// else {
//   console.log("잘못된 나이입니다.");
// }

var array = ["apple", "banana", "carrot"];
console.log(array[0]); // apple
console.log(array[1]); // banana
console.log(array[2]); // carrot
console.log(array);

array.push("donut"); // 배열의 맨 뒤에 donut 추가
array.splice(1,1 , "bee", "betray"); // 배열의 1번 인덱스부터 1개를 삭제하고 blueberry를 추가
console.log(array);

array.sort(); // 배열을 오름차순으로 정렬
console.log(array);

array2 = [2,5,78,6,4,1,3,9,0];
array2.sort((a, b) => a - b);
console.log(array2);

set1 = [1,5,3,5,6,7,8,9,1,2,3,4,5,6,7,8,9]; 

set1 = new Set(set1); // 중복제거
console.log(set1);
set1.add(10); // set에 10 추가
console.log(set1);
set1.delete(5); // set에서 5 삭제
console.log(set1);

var dic1 = {
  "name": "홍길동",
  "age": 20,
  "gender": ["남자",여자]
};

console.log(dic1.name); // 홍길동
console.log(dic1.age); // 20
console.log(dic1.gender[1]); // 여자

dic1.age = 21; // age 값 변경
console.log(dic1.age); // 21