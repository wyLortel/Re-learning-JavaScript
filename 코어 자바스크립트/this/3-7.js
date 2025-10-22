var obj = {
    method:function(x){
        console.log(this,x)
    }
}

obj.method(1);
