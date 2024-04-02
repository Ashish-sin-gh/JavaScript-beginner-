const text = document.querySelector('p');

const itemList = document.querySelector('.item-list')

const lists = itemList.querySelectorAll('li');

function run() {
    //className
    //log clasName
    console.log(text.className);

    //set classname
    // text.className = 'dark'; 
    //this also take away existing classes and assign entirely new classes
    // console.log(text.className);

    //better way - classList
    console.log(text.classList);  //gives DOMtokenList | like array | forEach can be used
    itemList.classList.forEach(c => console.log(c));

    //add a class to classList
    // text.classList.add('dark');
    // console.log(text.className);

    //remove a class from classList
    // text.classList.remove('dark');
    // console.log(text.className);

    // toggle() - switch the actions
    // text.classList.toggle('dark');

    //replace() -
    // text.classList.replace('card', 'dark');
    // console.log(text.className);

    
    //style change in DOM
    itemList.style.color = 'red';

    //change color for all at once or target a specific item- use forEach()
    lists.forEach((item, index) => {
        item.style.color = 'blue';
        if(index === 3){
            item.style.color = 'green';
        }
    })
}   

//execute on event only
document.querySelector('button').onclick = run;