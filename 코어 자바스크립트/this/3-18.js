function a(){
    var argv =Array.prototype.slice.call(arguments);
    argv.forEach(function(arg){
        console.log(arg);
    });
}

a(1,2,3);

document.body.innerHTML = '<div></div><div></div><div></div>';
var nodeList = document.querySelectorAll('div');
var nodeArr = Array.prototype.slice.call(nodeList);
nodeArr.forEach(function(node){
    console.log(node)
})