Array.prototype.map = function(callback , thisArg) {
    const result = [];
    for(let i =0; i <this.length; i++){
        result.push(callback(this[i],i,this));
    }
    return result;
}



