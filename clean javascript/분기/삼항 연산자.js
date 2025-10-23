let result;
if (age >=18){
    result = "성인입니다"
} else {
    result = "미성년자 입니다"
}

let result1 = age>= 18 ? "성인입니다" : "미성년자 입니다";


//나쁜 케이스
const message =
  condition1 ? result1 :
  condition2 ? result2 :
  condition3 ? result3 :
  "default";

//이럴때는 스위치문 사용 


// const message = 
//     condition1
//         ?(condition2 ? "a" : "b")
//         : "c";