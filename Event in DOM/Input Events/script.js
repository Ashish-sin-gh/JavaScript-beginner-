const textField = document.getElementById('item-input');
const priorityList = document.getElementById('priority-input');
const checkBox = document.getElementById('checkbox');

function onInput(e){
  //target - gives the target element where event took place
  console.log(e.target);

  //target.value - gives the value of the event that took place
  console.log(e.target.value);
}

function onCheck(e){
  console.log(e.target.checked);
}


textField.addEventListener('input',onInput);

priorityList.addEventListener('input', onInput);
priorityList.addEventListener('change', onInput);

checkBox.addEventListener('input',onCheck);


//focus - clicking in of the text field
//blur - clicking out of the text field
//mostly used for outline (CSS) the field
textField.addEventListener('focus', onFocus);
textField.addEventListener('blur', onBlur);


function onFocus(){
  textField.style.outlineStyle = 'solid'
  textField.style.outlineColor = 'red'
  textField.style.outlineWidth = '2px'
}

function onBlur(){
  textField.style.outlineStyle = 'none';
}