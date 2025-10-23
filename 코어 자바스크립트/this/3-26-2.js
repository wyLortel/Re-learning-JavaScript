var func = function(a,b,c,d){
    console.log(this,a,b,c,d);
}

var bindFunc = func.bind({x:1},4,5);
console.name(func.name);
console.log(bindFunc.name);


const user = {
    name : "우영",
    greet: function(){
        console.log(`안녕 나는 ${this.name}`)
    }
}

setTimeout(user.greet,1000);

setTimeout(user.greet.bind(user),1000);
