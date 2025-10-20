var  copyObjectviaJSON = function(target) {
    return JSON.parse(JSON.stringify(target));
};


var obj = {
    a:1,
    b:{
        c:null,
        d:[1,2]
    }
};

var obj2 = copyObjectviaJSON(obj)

obj2.a = 3;
obj2.b.c = 4;
obj2.b.d[1] = 3;


console.log(obj)
console.log(obj2)