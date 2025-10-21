var a = 1;
function outer(){
    function inner(){
        var a = 3;
        console.log(a);
    }
    inner(); //이게 이너로 이렇게 안되잇으면 함수 안에잇어도 호출이 안됨 
    console.log(a);
}

outer();
console.log(a);