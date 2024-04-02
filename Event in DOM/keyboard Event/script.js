const textInput = document.getElementById('item-form');

//keypress 
textInput.addEventListener('keypress' , onKeyPress);

//keyup
// textInput.addEventListener('keyup',onkeyup);

//keydown
textInput.addEventListener('keydown',onkeyDown);


function onKeyPress(e){
  document.querySelector('li:first-child').textContent = 'not apples';
  console.log('keypressed');
}

function onkeyup(){
  textInput.style.backgroundColor = 'brown';
  textInput.style.padding = '10px';
  console.log('key released');
}

function onkeyDown(e){
  textInput.style.backgroundColor = 'purple';
  textInput.style.padding = '20px';
  console.log('keydown');

  console.log(e.repeat);
}


//keyboard event object

function onKeyPress(e){

  //key
  //log the key user have pressed
  console.log(e.key);
  if(e.key === 'Enter'){
    alert('pressed enter');
  }

  //keyCode
  //return the code of the key
  if(e.keycode === 13){
    alter('pressed enter');
  }  

  //code
  //output like 
  //keyF keyA keyZ 
  //digit1 digit0
  //BracketRight comma
  //shift + key wont will gave same result as key without shift
  console.log(e.code);

  //repeat
  //holding down a key - true
  //pressing a key - false - no output 
  //use on keydown
  console.log(e.repeat);  

  //shiftKey
  //if pressed shift key - op will true, else false
  console.log(e.shiftKey);

  //ctrlKey
  //output - true / flase
  console.log(e.ctrlKey);

  //altKey
  //op - true / false
  console.log(e.altKey);

  //use case
  if(e.shiftKey && e.key === 'A'){
    console.log('pressed shift + A');
  }
}