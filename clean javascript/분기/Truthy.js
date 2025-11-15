if ("hello".length) { /* 실행됨: 5 → truthy */ }
if (10) { /* 실행됨 */ }
if ({}) { /* 실행됨 */ }
if ([]) { /* 실행됨 */ }
if (new Date()) { /* 실행됨 */ }
if (-1) { /* 실행됨: 0만 falsy, 음수/양수는 truthy */ }
if ("0") { /* 실행됨: 빈 문자열 ''만 falsy, '0'은 truthy */ }


if(!"");
if(!name);

function greet(name){
    if(!name){
        return '사람이 없네요'
    }
    return `안녕하세요, ${name}님`
}


const safeName = name || '이름없음';
const show = isReady && render();

