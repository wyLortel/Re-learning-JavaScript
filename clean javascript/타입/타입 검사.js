typeof x;
typeof (x);


typeof 10;
typeof 'hello';
typeof true;
typeof undefined;
typeof null;
typeof {};
typeof[];
typeof function(){}

class Example {}
typeof Example;

const str = "Hello";
typeof str;

const strObj = new String("Hello");
typeof strObj;


typeof null; // 대대적 오류

let x = 10;
x = "hello"
x= {name : "Lee"}
//언제 비뀔지 모름

function Person(name){
    this.name = name;
}

const me = new Person("Wooyoung");

const obj = {};
console.log(obj instanceof Person)


console.log([] instanceof Object); 
console.log(function(){} instanceof Object); 
console.log(new Date() instanceof Object); // 오브젝트가 상위라 다 트루

Object.prototype.toString.call(value);


Object.prototype.toString.call(123);
Object.prototype.toString.call("Hello");
Object.prototype.toString.call(true);
Object.prototype.toString.call([]);
Object.prototype.toString.call(function(){});
Object.prototype.toString.call(new Date());
Object.prototype.toString.call(null);
Object.prototype.toString.call(undefined);


