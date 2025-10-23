var obj2 = {
    name : 'obj2',
    func: obj.func
};

var callback2 = obj2.func();
setTimeout(callback2,1500);

var obj3 = {name : 'obj'};
var callback3 = obj1.func.call(obj3)
setTimeout(callback3,2000)


