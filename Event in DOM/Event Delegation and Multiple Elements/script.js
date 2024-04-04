//remove item using forEach() 
const list1 = document.querySelectorAll('li');

list1.forEach(item => {
  item.addEventListener('dblclick' , e => {
    e.target.remove(); // this will remove the compele element
    //item.remove();   will also do the same btw
  });
});


//using better way 
//calling eventListener only once at the parent and removing particular child 
const ul = document.querySelector('ul');

ul.addEventListener('click' , (e) => {
  if(e.target.tagName === 'LI'){
    e.target.remove();
  }
  //e.taget will give exact element that is clicked on be it parent or child element as the eventListner is placed on parent element
});

ul.addEventListener('mouseover', (e) => {
  if(e.target.tagName === 'LI'){
    e.target.style.backgroundColor = 'black';
    e.target.style.color = 'white';
  }
});

ul.addEventListener('mouseout', (e) => {
  if(e.target.tagName === 'LI'){
    e.target.style.backgroundColor = 'white';
    e.target.style.color = 'black';
  }
});