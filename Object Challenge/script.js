const library = [
    {
        title:"title 1",
        author:"author 1",
        status:{
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title:"title 2",
        author:"author 2",
        status:{
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title:"title 3",
        author:"author 3",
        status:{
            own: true,
            reading: false,
            read: false,
        }
    },
]

//set read value for all to TRUE
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
console.log(library);

//destructure the title from the first book and rename the varible to 'firstbook'
const {title : firstBook} = library[0];
console.log(firstBook);

//turn the library object into JSON
const str = JSON.stringify(library);
console.log(str);
