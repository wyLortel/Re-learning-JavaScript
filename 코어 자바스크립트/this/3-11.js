var obj = {
    outer: function(){
        console.log(this);

        var innerFun = ()=> {
            console.log(this)
        }
        innerFun();
    }
};

obj.outer()