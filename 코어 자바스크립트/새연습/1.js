//호이스팅 전
// console.log(a());
// console.log(b());
// console.log(c());

// function a(){
//   return a;
// }

// var b = function bb(){
//   return a;
// }

// var c = function() {
//   return c;
// }

//호이스팅 후
// function a(){
//   return a;
// }

// var b;
// var c;

// console.log(a());
// console.log(b());
// console.log(c());

// b = function bb(){
//   return a;
// }
// c = function() {
//   return c;
// }
// function b(){
//   function c(){
//     console.log(this);
//   }
//   c();
// }

// b()

// function Person(n,a){
//   this.name = n;
//   this.age = a;
// }

// var roy = new Person('재남' , 30);
// console.log(roy)

console.log("1초후 실행");

setTimeout(() => {
  console.log("1초 지연");

  setTimeout(() => {
    console.log("2초 지연");

    setTimeout(() => {
      console.log("3초 지연");
    }, 3000);
  }, 2000);
}, 1000);

function delay(cb, ms) {
  console.log(`${ms - 1000}ms 후 실행`);
  setTimeout(cb, ms);
}

function step1() {
  delay(step2, 2000);
}

function step2() {
  delay(step3, 3000);
}

function step3() {
  console.log("3초 지연");
}

setTimeout(step1, 1000);
