//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


//Creating prototype
function Person(name, age){
    this.name = name;
    this.age = age;
    
    //A Method inside JS Protoype
    this.printInfo = () =>  {
        console.log(`This person's name is ${this.name} and they are ${this.age} years old!`);
    }
    this.older = () =>  {
        age += 1
        return age
    }
    this.add_age = (years_increase) =>  {
        age += years_increase
        console.log(age)
    }
}

// Creating an instance of a prototype
let agnes = new Person ('Agnes', 76)
let winston = new Person ('Winston', 82)

//Call our prototype method
console.log(agnes.printInfo())

console.log(winston.printInfo())


// This function adds "amount" of years to "person"
// Just call it: get_older(agnes, 2)
function get_older(person, amount) {
    for(i=0; i < 1; i++){
        person.add_age(amount)
        }
}