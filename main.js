
// === ARROW FUNCTIONS ===

// Arrow functions solve issues with the "this" keyword when used in traditional functions.

function printMyName(name){
  console.log(name)
};
printMyName("Chad");

const printMyName2 = (name) => {
  console.log(name);
}
printMyName2("Harvey");


// === CLASSES ===========================================

class Human {
  constructor() {
    this.gender = "Male";
  }

  printGender() {
    console.log(this.name);
  }
}

// the person class extends the Human class, 
class Person extends Human {
  constructor() {
    // super() is a constructor that executes the extended parent class "Human"
    super();
    this.name = "Chad";
    // this.gender = "female"; --- would replace the parent class property
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();

// =======================================================



// === CLASSES, PROPERTIES, AND METHODS ==================

// ES7 introduced a new syntax for constructors and methods
// The "this" keyword is no longer needed to declare properties

class Human2 {
  gender = 'male';

  printGender = () => {
    console.log(this.gender);
  }
}

class Person extends Human {
  // super() is not needed in this syntax
  name = "Chad";

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();

// =======================================================


// ===SPREAD & REST OPERATORS ============================

// Spread - used to split up array elements OR object properties
// Rest - used to merge a list of function arguments into an array

/*
SPREAD SYNTAX

const newArray = [...oldArray, 1, 2]
--- adds all elements of the old array to the new array

const newObject = {...oldObject, newProp: 5}
--- pulls all properties and their values of the oldObject and add them to the newObject as key/value pairs.
--- newProp: 5 is a new key/value pair added to the object OR if that key already exists, it will be overwritten with 5.
*/

/*
REST SYNTAX

function sortargs(...args) {
  return args.sort()
}
*/


const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);
// logs [1, 2, 3, 4, 5]

const person = {
  name: "Chad"
};

const newPerson = {
  ...person,
  age: 33
}

console.log(newPerson);
// logs 
// [object Object] {
//   age: 33,
//   name: "Chad"
// }

// REST

const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));
// logs [1]


// =======================================================

// === DESTRUCTURING =====================================

// Easily extract array elements or object properties and store them in variables

// ARRAY DESTRUCTRING & OBJECT DESTRUCTURING

// ARRAY DESTRUCTURING
const numbers = [1, 2, 3]
[num1, num2] = numbers;
console.log(num1, num2);
// logs 1 and 2

// OBJECT DESTRUCTURING

{name} = {name: "Chad", age: 33}

// =======================================================

// === PRIMITIVE & REFERENCE TYPES =======================

const person = {
  name: "Chad"
};

// secondPerson does not reference the properties of the object
// it is a POINTER that points to the object
const secondPerson = person;

// so when the value of the name is changed here...
person.name = "Harvey";

// and it is console logged here...
console.log(secondPerson);

// what actually logs to the console is "Harvey"
// because the value of name is not set in second person, just the object reference.
// the object reference was changed to "Harvey" before the console log

// Hoever if secondPerson was written with a spread operator like this...
const secondPerson = {
  ...person
};

// it will grab the key/value pairs of "person" and set them to second person
// Then logging "Chad"

// =======================================================


// === REFRESHING ARRAY FUNCTIONS ========================

const numbers = [1, 2, 3]

const doubleNumArray = numbers.map((num) => {
  return num * 2;
});

console.log(numbers);
// [1, 2, 3]
console.log(doubleNumArray);
// [2, 4, 6]

// =======================================================