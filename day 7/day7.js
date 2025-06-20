//this primitive data type is stores as single value =number,null,string,symbol,boolean,null
const name="shiva";
console.log(name);

const age=26;
console.log(age);

const isTrue=false;
console.log(isTrue);


//this non primitive data type are of 2  they are object{}, array[]

// object {}
const Student={
    name:"ram",
    age:27,
    isJob:false,
};
//console.log(Student);  //this shows full object
console.log(Student.isJob); // this shows particular element in object

// array [] (*array of objects)
const swiggy=[
    obj1={
        restName:"itihaas",
        rating:4
    },
    obj2={
        restName:"bbq",
        rating:1
    },
    obj2={
        restName:"mehfil",
        rating:2
    },
    obj2={
        restName:"spicy venue",
        rating:5
    },
];
// console.log(swiggy); // this shows whole swiggy array

// console.log(swiggy[0].restName); //this shows only particular object details only


const hydHotel = swiggy.map((hydSwiggy) => {
    return console.log(hydSwiggy.restName,hydSwiggy.rating);
    
});
console.log(hydHotel);

