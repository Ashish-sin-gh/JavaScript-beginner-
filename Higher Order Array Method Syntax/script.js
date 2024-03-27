const socials = ['twitter','linkedin','facebook','github','codepen'];

//to display all the methods associated with array object
// console.log(socials.__proto__);

//array.forEach
socials.forEach(function (social){
    console.log(social);
});

//arrow function
socials.forEach(social => console.log(social));

//array of objects
const users = [
    {name:'ashish', id:1},
    {name:'harsita'},
    {name:'ankita'},
    {name:'kiran'}
];

users.forEach(user => console.log(user.id));

//pass index
users.forEach((user, inde, arr) => console.log( user,inde, arr));
//display (can give any name inthe parameter)
//user - elment
//index - index of that element
//arr - complete array

//pass named funciton
function logSocials(social){
    console.log(social);
}

socials.forEach(logSocials)

//even no array filter using for each
const nums = [1,2,3,4,5,6,7,8,9,10];
let evenNums = [];
nums.forEach(function(num){
    if(num % 2 === 0){
        evenNums.push(num);
    }
});
console.log(evenNums);


//array.filter

//always return something (mostly an array)

//filter even no 
const arr=[0,1,2,3,4,5,6,7,8,9];

const result = arr.filter(function(num){
    return num % 2 === 0;
});

console.log(result);

//short version

//filter odd no 
const result2 = arr.filter(num => num % 2 !== 0); 

console.log(result2);

// forEach example 
const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// get only retail company
const retailCom = companies.filter(retail => retail.category === 'Retail');

console.log(retailCom);

// Get companies that started in or after 1980 and ended in or before 2005
const comp = companies.filter(company => company.start >= 1980 && company.end <= 2005);

console.log(comp);

//companies that lasted 10yrs or more
const comp10 = companies.filter(company => company.end - company.start >= 10);

console.log(comp10);


//Array.map
//can do any operation on the array element

//double array element using map
const numbers =[1,2,4,5,6,7,8];

const map1 = numbers.map(num => num * 2);

console.log(map1);

//double array element with forEach

const newNumArr = [];
numbers.forEach(number => {
    const n = number * 2;
    newNumArr.push(n);
});

console.log(newNumArr);


//some hands on practice - map
const business = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

//create an array of company names
const busName = business.map(function (company){
    return company.name;
});

console.log(busName);

//create an array with name and category
const busName2 = business.map(company =>
{
    return {
        name: company.name,
        category: company.category,
    } 
});
console.log(busName2);   

//create an array of object with name and the length of each companies in years
const arrObj = business.map(company => {
    return {
        name: company.name,
        length: company.end - company.start + ' years',
    };
});

console.log(arrObj);

//chain map function
//sqrt and double the given array
const intialNum = [1,4,9,16,25];
const newNum = intialNum
    .map(num => Math.sqrt(num))
    .map(sqrt => sqrt * 2);

console.log(newNum);

//chain with other methods
const numbersNew = [1,2,3,4,5,6,7,8,9,10];
const evenDoubleArr = numbersNew
    .filter(no => no % 2 === 0)
    .map(even => even * 2);
console.log(evenDoubleArr);



//Array.reduce()
//reduce an array to a single value

//sum of all element in an array
const numbersOld = [1,2,3,4,5,6,7,8,9,10];

//long way
const intialValue = 0;
const sum = numbersOld.reduce(function (accumulator , currentValue) {
   return accumulator + currentValue;
}, intialValue);

console.log(sum);

//short way
const sum1 = numbersOld.reduce((acc,curr) => acc + curr, 0);

console.log(sum1);

//using for-of loop
const numBer = [1,2,3,4,5,6,7,8,9,10];

const sum2 = function(){
    let acc = 0;
    for(curr of numBer){
        acc = acc + curr;
    }
    return acc;
}

console.log(sum2());


//shoping cart example 
const cart = [
    {id:1, name: 'mango', price: 150},
    {id:2, name: 'banana', price: 100},
    {id:3, name: 'chips', price: 50},
];

let intial = 0;

const totalPrice = cart.reduce((acc , curr)=> acc + curr.price, intial);

console.log(totalPrice);


