// Challenge 1
const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];

  const youngPeople = people
    .filter(p => p.age <= 25)
    .map(yp =>{
        return{
            name: yp.firstName + ' ' +yp.lastName,
            email: yp.email,
        }
});

console.log(youngPeople);


//challenge 2
//add all the postive no in the array 
const numbers = [2,-30,30,50,-25,45,5];

const finalRes = numbers
    .filter(number => number > 0)
    .reduce((acc, posno) => acc + posno, 0);

console.log(finalRes);


//challenge 3
//make the first letter of all element Upper-case
const words = ['coder', 'programmer', 'developer'];

const capitalizedWord = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
});

console.log(capitalizedWord);