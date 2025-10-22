var global = 0;

function outer(){
    console.log(global); //underfined
    var global = 5;


    function innner(){
        var global = 10;

        console.log(global); // 10
    }

    innner();

    global = 1;
    console.log(global) //1
}

outer();


var sum;

console.log(sum());

function sum(){
    return 1+2;
};

function sum(){
    return 1+2+3;
}

function sum(){
    return 1+2+3+5;
}