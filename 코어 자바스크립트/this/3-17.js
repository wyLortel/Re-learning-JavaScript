var obj = {
    0: 'a',
    1: 'b',
    2: 'x',
    length:3
};

Array.prototype.push.call(obj,'b');
console.log(obj);

var arr = Array.prototype.slice.call(obj);
console.log(arr)