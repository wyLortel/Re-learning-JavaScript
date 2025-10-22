var globalVar = "global"

console.log(globalVar) //전역공간은 같은걸 공유해서 파일을 나누어도 다른 파일에서 접근 가능

// index.js
var setTimeout = 10;

// index2.js
setTimeout(() => console.log('1초 뒤 실행'), 1000);