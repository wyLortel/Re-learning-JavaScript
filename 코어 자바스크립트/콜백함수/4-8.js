var obj1 = {
    name : 'obj',
    func:function(){
        var self = this;
        return function(){
            console.log(self.name);
        };
    }
};

var callbacl = obj1.func();
setTimeout(callback ,1000);

