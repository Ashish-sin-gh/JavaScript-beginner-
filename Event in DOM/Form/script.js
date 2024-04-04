const form = document.getElementById('item-form');

//submit - event
form.addEventListener('submit' , onsubmit);
/*
function onsubmit(e){
  e.preventDefault();
  console.log('submit');
}
*/


//add values 
function onsubmit(e){
  e.preventDefault();
  
  const item = document.getElementById('item-input');
  
  //element
  console.log(item);
  //the value 
  console.log(item.value); //either u can add .value here


  const priority = document.getElementById('priority-input').value; // or u can add .value here

  //value 
  console.log(priority);
}


//formData - object 

function onsubmit2(e){
  e.preventDefault();

  //declearing and initalizing
  const formdata = new FormData(form);

  //log methods associated to FormData
  console.log(formdata);

  //get value
  const itemVal = formdata.get('item'); //item - this is taken from input HTML tag's attribute (name = 'item')
  
  const priorityVal = formdata.get('priority'); // priority - taken from select list HTML tag's attribute value of name = 'priority' 
  console.log(itemVal,priorityVal);

  //for getting all of the entries - entries() method
  const entries = formdata.entries();
  
  console.log(entries); //op- iterator with all the entries

  //access this iterator using for-of 
  for(let entry of entries){
    console.log(entry);
    console.log(entry[0]);
    console.log(entry[1]);
  }

}

form.addEventListener('submit', onsubmit2);
