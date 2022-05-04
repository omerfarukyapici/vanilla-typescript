// Basic Types
/* string */
let myName: string = "Ömer Faruk";
let yourName: string;
yourName = "john";
/* Number */
let age: number = 25;
/* Boolean */
let isLoveGames: boolean = true;
/* Any type */
let anyType: any = "Hello";
console.log(myName, yourName, age, isLoveGames, anyType);

//Basic Types - Multiple values (ARRAY)
/* This is an array only contains numbers */
let ages: number[] = [14, 54, 23, 45, 67];
ages.push(21);
/* This is an array only contains strings */
let allNames: string[] = ["Ömer", "Faruk", "John"];
allNames.push("Nisa");
/* This is an array only contains booleans */
let allDestination: boolean[] = [false, true];
allDestination.push(false);
/* This is an array contains any types */
let anyArray: any[] = [1, true, "Hello"];
anyArray.push(false)
console.log(ages, allNames, allDestination, anyArray);

//Tuple
let person: [string, number, boolean] = ["Ömer", 25, true];
//Tuple Array
let employee: [number, string, boolean][];
employee = [
    [27, "Brad", true],
    [30, "John", false],
    [22, "medeline", true],
    [12, "Katty", false],
]
console.log(employee)

//Union 
/* Can be string or number */
let dogId: string | number = 22; 
/* Can be string or number */
let dogs: string | number;
dogs = 'string' /* 23 */

//Enum 
enum Destination1 {
    Up,
    Down,
    Left,
    Right,
}
enum Destination2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
}
console.log(
    Destination1.Up, 
    Destination1.Down, 
    Destination1.Left, 
    Destination1.Right
)
console.log(
    Destination2.Up, 
    Destination2.Down, 
    Destination2.Left, 
    Destination2.Right
);
enum Colors {
    Blue = "Blue",
    Green = "Green",
}
const showColor = (color: Colors) => {
    console.log(color)
}
showColor(Colors.Blue);




//Objects
/* We can use like this */
const user: {id: number, name: string} = {
    id: 1,
    name: "Ömer"
};
/* Also use like this */
type Cat = {
    id: number,
    name: string
}
const cat: Cat = {
    id: 1,
    name: "Medaline"
}   

//Type Assertion
let cid: any = 1;
/* let costumerId = <number>cid; */
/* let costumerId = <string>cid; */
let costumerId = cid as number;


//Function params types and return types
const functionOne = (x: number, y: number): number => {
    return x + y
}
console.log(functionOne(5, 4));

//Void 
const functionTwo = (message: string | number): void => {
    console.log(message);
}
functionTwo("This is a message");
functionTwo(4);


//İnterfaces 
interface UserInterface {
    id: number,
    name: string,
    age?: number, // ? mark means this age optional to use
    readonly word: string, //Readonly means this is only read in object you can't pass any value out of this object
}
const User1: UserInterface = {
    id: 1,
    name: "Name1",
    word: "This is word",
}
User1.id = 9; // This is possible 
/* User1.word = "Pass value out of object is not working because this is readonly"; */ //This not possible


//Function Interfaces
interface MathFuncInterface {
    (x: number, y:number) : number
}
const add: MathFuncInterface = (x: number, y:number): number => x + y;
const sum: MathFuncInterface = (x: number, y:number): number => x - y;
console.log(add(10 ,10));
console.log(sum(10 ,5));


//class types 
interface PersonClassInterface {
    id: number
    name: string
    register(): string //Method type
}

class Person implements PersonClassInterface{
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`; //This return value must be a string!
    }
} 

const Person1 = new Person(1 , "Person1")
const Person2 = new Person(2 , "Person2")

console.log(Person1, Person2);

console.log(Person1.register())
console.log(Person2.register())


/* Also this topics are TypeScript */

// 1 -) Extending classes (subclasses).
// 2 -) Generics.