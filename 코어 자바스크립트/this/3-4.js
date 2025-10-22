var a =1;
window.b =2;

console.log(a,window.a,this.b) //111
console.log(b,window.b,this.b) ///222

window.a = 3;
b= 4;

console.log(a,window.a,this.a); // 333
console.log(b,window.b,this.b); // 444