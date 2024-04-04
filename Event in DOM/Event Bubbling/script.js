const button = document.querySelector('form button'); //direct child of div

const div = document.querySelector('form div:nth-child(2)'); //direct child of form

const form = document.querySelector('form'); //parent

button.addEventListener('click' , (e) =>{
  alert('button was clicked');
  // e.stopPropagation();
});

div.addEventListener('click' , () =>{
  alert('div was clicked');
});

form.addEventListener('click' , () =>{
  alert('form was clicked');
});

// in the above case the event will start to bubble i.e. run one after the other as parent have same event listener as that of child 
// first the inner most event will be fired and then outer


// to slove this use - 

// stopPropagation() 

// which is a part of event object

