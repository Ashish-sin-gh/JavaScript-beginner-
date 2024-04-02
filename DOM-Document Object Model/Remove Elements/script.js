//way one 
//remove() -> remove directly the element
function removeButtonClearAll(){
    const clearBtn = document.querySelector('#clear');

    clearBtn.remove();
}

// removeButtonClearAll();

//way two 
//removeChild() -> remove using parent element 
function removeFirstList(){
    const ul = document.querySelector('ul');

    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
}

// removeFirstList();


//remove using a item number 

//way 1
function removeItem1 (itemNo){
    const ul = document.querySelector('ul');

    const li = document.querySelector(`li:nth-child(${itemNo})`);

    ul.removeChild(li);
}

//removeItem1(3);


//way 2
function removeItem2 (itemNo){
    const li = document.querySelectorAll('li');

    li[itemNo - 1].remove();
}

// removeItem2(3);

//short way - using arrow function
const removeItem4 = (itemNo) => document.querySelectorAll('li')[itemNo - 1].remove();

removeItem4(2);


//way 3
function removeItem3 (itemNo){
    const ul = document.querySelector('ul');

    const li = document.querySelectorAll('li')[itemNo - 1];

    ul.removeChild(li);
}

// removeItem3(4);


