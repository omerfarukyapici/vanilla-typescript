"use strict";
// Basic Types
/* string */
let myName = "Ömer Faruk";
let yourName;
yourName = "john";
/* Number */
let age = 25;
/* Boolean */
let isLoveGames = true;
/* Any type */
let anyType = "Hello";
console.log(myName, yourName, age, isLoveGames, anyType);
//Basic Types - Multiple values (ARRAY)
/* This is an array only contains numbers */
let ages = [14, 54, 23, 45, 67];
ages.push(21);
/* This is an array only contains strings */
let allNames = ["Ömer", "Faruk", "John"];
allNames.push("Nisa");
/* This is an array only contains booleans */
let allDestination = [false, true];
allDestination.push(false);
/* This is an array contains any types */
let anyArray = [1, true, "Hello"];
anyArray.push(false);
console.log(ages, allNames, allDestination, anyArray);
//Tuple
let person = ["Ömer", 25, true];
//Tuple Array
let employee;
employee = [
    [27, "Brad", true],
    [30, "John", false],
    [22, "medeline", true],
    [12, "Katty", false],
];
console.log(employee);
//Union 
/* Can be string or number */
let dogId = 22;
/* Can be string or number */
let dogs;
dogs = 'string'; /* 23 */
//Enum 
var Destination1;
(function (Destination1) {
    Destination1[Destination1["Up"] = 0] = "Up";
    Destination1[Destination1["Down"] = 1] = "Down";
    Destination1[Destination1["Left"] = 2] = "Left";
    Destination1[Destination1["Right"] = 3] = "Right";
})(Destination1 || (Destination1 = {}));
var Destination2;
(function (Destination2) {
    Destination2["Up"] = "Up";
    Destination2["Down"] = "Down";
    Destination2["Left"] = "Left";
    Destination2["Right"] = "Right";
})(Destination2 || (Destination2 = {}));
console.log(Destination1.Up, Destination1.Down, Destination1.Left, Destination1.Right);
console.log(Destination2.Up, Destination2.Down, Destination2.Left, Destination2.Right);
var Colors;
(function (Colors) {
    Colors["Blue"] = "Blue";
    Colors["Green"] = "Green";
})(Colors || (Colors = {}));
const showColor = (color) => {
    console.log(color);
};
showColor(Colors.Blue);
//Objects
/* We can use like this */
const user = {
    id: 1,
    name: "Ömer"
};
const cat = {
    id: 1,
    name: "Medaline"
};
//Type Assertion
let cid = 1;
/* let costumerId = <number>cid; */
/* let costumerId = <string>cid; */
let costumerId = cid;
//Function params types and return types
const functionOne = (x, y) => {
    return x + y;
};
console.log(functionOne(5, 4));
//Void 
const functionTwo = (message) => {
    console.log(message);
};
functionTwo("This is a message");
functionTwo(4);
const User1 = {
    id: 1,
    name: "Name1",
    word: "This is word",
};
User1.id = 9; // This is possible 
const add = (x, y) => x + y;
const sum = (x, y) => x - y;
console.log(add(10, 10));
console.log(sum(10, 5));
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`; //This return value must be a string!
    }
}
const Person1 = new Person(1, "Person1");
const Person2 = new Person(2, "Person2");
console.log(Person1, Person2);
console.log(Person1.register());
console.log(Person2.register());
/* Also this topics are TypeScript */
// 1 -) Extending classes (subclasses).
// 2 -) Generics.
