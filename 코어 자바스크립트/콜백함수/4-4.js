Array.prototype.map = function(callback , thisArg) {
    const result = [];
    for(let i =0; i <this.length; i++){
        result.push(callback(this[i],i,this));
    }
    return result;
}


var newArr2 = [10,20,30].map(function(index,currentValue){
    console.log(index,currentValue);
    return currentValue +5;
});

console.log(newArr2)




