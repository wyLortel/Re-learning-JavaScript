var str = 'abc def';

Array.prototype.concat.call(str,'string');
Array.prototype.every.call(str,function(ch){return ch !== '';})
Array.prototype.some.call(str,function(ch){return ch === '';})


var newArr = Array.prototype.map.call(str,function(ch){return ch + "!"});
console.log(newArr)

var newStr = Array.prototype.reduce.apply(str, [
  function(str, ch, i){ return str + ch + i; },
  ''
]);
console.log(newStr); 
