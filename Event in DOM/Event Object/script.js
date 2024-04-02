const image = document.querySelector('img');

function onClick(e){
  console.log(e); //this will display all the property and method in event object 

  //target 
  //the element that triggered the event (where the click take place)
  console.log(e.target);

  //using e.target
  image.style.backgroundColor = 'blue';

  //currentTarget
  //the element that the eventListener is attached to
  console.log(e.currentTarget);

  //type 
  //the type of event that is triggered
  console.log(e.type);

  //timeStamp 
  //the time at which event wass triggred
  console.log(e.timeStamp);

  //clientX 
  //the X position (horizontal) of the mouse click relative to the window
  console.log(e.clientX);

  //clientY
  //the Y position (vertical) of the mouse click relative to the window
  console.log(e.clientY);

  //offsetX
  //the X position of the mouse click reletive to the element
  console.log(e.offsetX);
  
  //offsetY
  //the Y position of the mouse click reletive to the element
  console.log(e.offsetY);

  //pageX
  //the X position of the mouse click relative to the page
  console.log(e.pageX);

  //pageY
  //the Y position of the mouse click relative to the page
  console.log(e.pageY);

  //screenX
  //the X position of the mouse click relative to the screen
  console.log(e.screenX);

  //screenY
  //the X position of the mouse click relative to the scren
  console.log(e.screenY);
}


image.addEventListener('click' , onClick);


//better example to see different result of target and currentTarget
document.body.addEventListener('dblclick', (event) => {
  console.log(event.target)
  console.log(event.currentTarget);
});


//event object can also have a dynamic value too (eg- using drag)
image.addEventListener('drag', onDrag);

function onDrag(e){
  document.querySelector('h1').textContent = `X = ${e.clientX} , y = ${e.clientY}`;
}