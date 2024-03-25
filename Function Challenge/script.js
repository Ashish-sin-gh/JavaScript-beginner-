//challenge 1
function getCelsius(tempF){
    let tempC = (tempF - 32) * (5/9);
    return `${tempF}\xB0F fahrenheit in celsius is ${tempC}\xB0C`;
}

const op = getCelsius(32); 
console.log(op)

//using arrow function
const temp = f => console.log((f-32)*(5/9));

temp(40);


// challenge 2
function minMax(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    //return using an object
    return{
        min,
        max: max,
    };
}

console.log(minMax([45,5,10,8,21,25,44]));


//Challenge 3
(function (l, b){
    console.log(`the area of rectangle with a length of ${l} and breadth of ${b} is ${l*b}`);
})(25,5);

// arrow function in iffe
((length, breadth) => console.log(`the area of rectangle with a length of ${length} and breadth of ${breadth} is ${length*breadth}`))(50, 10);


//date operator
const d = new Date();
const hr = d.getDate();
console.log(d);
console.log(hr);
