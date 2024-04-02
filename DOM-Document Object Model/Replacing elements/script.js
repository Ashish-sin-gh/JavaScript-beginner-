//way one - using replaceWith()
function replaceFirstItem(){
  const firstItem = document.querySelector('li:first-child');

  const newItem = document.createElement('li');
  newItem.textContent = 'Gulab Jamun';

  firstItem.replaceWith(newItem);
}

replaceFirstItem();


//second way - using outerHTML
function replaceSecondItem(){
  const secItem = document.querySelector('li:nth-child(2)');

  secItem.outerHTML = '<li>replaced item</li>' 
}

replaceSecondItem();


//replace all items - use forEach
function replaceALL(){
  const all = document.querySelectorAll('li'); // nodeList

  all.forEach((item , index) => {
    item.outerHTML = `<li>replaced ${index + 1}</li>`
  });
}

replaceALL();


//way three - using replaceChild on the parent
function replaceHeaderChild(){
  const header = document.querySelector('header');

  const h1 = document.querySelector('header h1');

  const h1new = document.createElement('h1');
  h1new.textContent = 'Shopping Kart';
  h1new.title = 'shopping list changed to shopping kart';
  h1new.style.fontWeight = 'bold';

  header.replaceChild(h1new , h1); 
}

replaceHeaderChild();