var obj = {
    vals : [1,2,3],
    logValue : function(v,i){
        console.log(this ,v,i)
    }
}

obj.logValue(1,2);
[4,5,6].forEach(obj.logValue);


[4,5,6].forEach(obj.logValue.bind(obj));