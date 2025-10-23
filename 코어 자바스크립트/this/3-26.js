function add(a,b,c){
    return a+b+c;
}

const add5 = add.bind(null,5);
console.log(add5(10,20))