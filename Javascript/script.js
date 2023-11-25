// step 1
let fruits = [];

// Step 2
fruits.push("apple", "banana", "orange");

// Step 3: 
fruits.shift();

// Step 4: 
fruits.push("grape");

// Step 5: .
fruits[1] = "pear";

// Step 6: 
console.log(fruits);


/// object ///

let person = {
    name:"john",
    age:30,
    city:"new york"
}
// step 2
 delete person.age;
 
//step 3
person.job = "Developer";

// step 4
person.city = "San francisco";

// step 5
console.log(person);


/// object & array ///
 // step 1


let cars = [

]    

// step 2

cars.push({make:"toyota", car:"camry", year:2018 });
cars.push({make:"toyota", car:"camry", year:2018 });
cars.push({make:"toyota", car:"camry", year:2018 });

// step 3 
cars.shift();

//step 4

cars.push({make:"Honda", car:"Civic", year:2020});

//step 5

if (cars.length >= 2) {
    cars[1].model = "Accord";
  }

// step 6 

console.log(cars);