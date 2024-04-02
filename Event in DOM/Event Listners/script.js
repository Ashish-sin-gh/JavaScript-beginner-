//way 1 -> inline HTML event listener 
//not at all recommended

//way 2
//javascript event Listener
//disadvance - cant used multiple event listeners for same event

const clearBtn = document.querySelector('#clear');

// clearBtn.onclick = function(){
//   alert('list cleared');
// };

// clearBtn.onclick = function(){
//   console.log('clered list message on console');
// };
// only latter event listner will run and not first one 


//way 3
//addEventListener()
//advantage - can run multiple event for same event listener

// clearBtn.addEventListener('click' , function (){
//   alert('cleared items');
// });

// clearBtn.addEventListener('click' , () => console.log('cleared list - updated on console too'));


//addEventListener() with a named function
// function clearList(){
//   alert('cleared list');
// }

// clearBtn.addEventListener('click', clearList);


//removeEventListener()
//parameter 1 - event type 
//parameter 2 - reference event

//remove the event listener after 5 second of the page load
//setTimeout(() => clearBtn.removeEventListener('click' , clearList), 5000)  //5000 milliseconds

//let script do the click for same above code
//setTimeout(() => clearBtn.click(), 5000);
//after 5 seconds the script will automatically click the clear all button


//clear the list from DOM on click of clear all button 

function onClear(){
  //way 1 - innerHTML
  // document.querySelector('ul').innerHTML = '';

  //way 2 - forEach() + remove()
  // document.querySelectorAll('ul li').forEach((item) => item.remove());

  //way 3 - while Loop
  const ul = document.querySelector('ul');

  while(ul.firstChild){
    ul.removeChild(ul.firstChild);
  }
}

clearBtn.addEventListener('click' , onClear);