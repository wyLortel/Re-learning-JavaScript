(function(){
    var a = 0;
    var intervalId = null;
    var inner = function(){
        if(++a >= 10){
            clearInterval(intervalId)
        }
        console.log(a)
    }
    intervalId = setInterval(inner,1000);
})


(function () {
  var count = 0;
  var button = document.createElement('button');
  button.innerText = 'click';
  button.addEventListener('click', function () {
    console.log(++count, 'times clicked');
  });
  document.body.appendChild(button);
})();



(function () {
  var count = 0;
  var button = document.createElement('button');
  button.innerText = 'click';

  var clickHandler = function () {
    console.log(++count, 'times clicked');
    if (count > 10) {
      button.removeEventListener('click', clickHandler);
      clickHandler = null; 
    }
  };

  button.addEventListener('click', clickHandler);
  document.body.appendChild(button);
})();