const image = document.querySelector('img');

function onClick(){
  console.log("one time click on image");

  image.style.border = '3px solid black'
}

function onDoubleClick(){
  if(document.body.style.backgroundColor === 'black'){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  } else {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  }
}

function onRightclick(){
  console.log('right click done');
}

function onholdleft(){
  console.log('pressing holding left click');

}

function onMouseUP(){
  console.log('left press released');
}

function onWheel(){
  console.log('scrolling...');
}

function onMouseover(){
  console.log('cursor on the image');
  image.setAttribute('title' , 'image');
}

function onMouseout(){
  console.log('mouseout');
}

function ondragstart(){
  console.log('drag started');
}

function onDrag(){
  console.log('dragging...');
}

function onDragEnd(){
  console.log('dragging ended');
}


//event listeners

//click - one click
image.addEventListener('click', onClick);

//dblclick - double click
image.addEventListener('dblclick' , onDoubleClick); 

//contextmenu - right click
image.addEventListener('contextmenu' , onRightclick);

//mousedown - press and hold mouse left 
image.addEventListener('mousedown' , onholdleft);

//mouseup - releasing the left press
image.addEventListener('mouseup' , onMouseUP);

//wheel - mouse wheel/scroller
image.addEventListener('wheel' , onWheel);

//there is no hover in js 
//insted there is mouseover and mouseout

//mouseover - cursor on the designated area
image.addEventListener('mouseover' , onMouseover);

//mouseout - cursor out of the area
image.addEventListener('mouseout' , onMouseout);

//dragstart - press hold and drag 
//fires only once on the start of the event
image.addEventListener('dragstart' , ondragstart);

//drag - till the time its being dragged
//fires off multiple time in one drag
image.addEventListener('drag' , onDrag);

//dragend - press hold drag and release
//fires only once on the end of the event
image.addEventListener('dragend' , onDragEnd);