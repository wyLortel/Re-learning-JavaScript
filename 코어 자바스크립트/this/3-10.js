var obj = {
    outer: function(){
        console.log(this);

        var innerFun1 = function(){
            console.log(this)
        };
        innerFun1();

        var self = this;

        var innerFun2 = function(){
            console.log(self);
        };
        innerFun2();
    }
};

obj.outer()