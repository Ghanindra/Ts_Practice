// Q1

// Create a variable id that can only be either a string or number. Assign a value, then write a function that prints "string id" or "number id" based on the type.

// function word(id:string|number){
// if(typeof(id) ==="string"){
//     console.log(`${id}`);
    
// }else{
//     console.log(`${id}`);
    
// }
// }
// word(12)

// Q2

// Define a type called Status that can be "active" | "inactive" | "pending".
// Create a function that takes a Status and prints a message for each case.

// type status="active"|"inactive"|"pending";
// function stat(s:status){
//     if( s==="active"){
// console.log("active");

//     } else if(s==="inactive"){
//         console.log("inactive");
        
//     }else{
//         console.log("pending");
        
//     }

// }
// stat("active")



// Type Narrowing Practice

// Q3

// Write a function formatInput that takes input: string | number.

// If it’s a string, return it in uppercase

// If it’s a number, return it multiplied by 2

// function formatInput(str:string|number):string|number{
// if(typeof(str)==="string"){
//     return str.toUpperCase();
// }
//   return str*2;
    

// }
// let s=formatInput(25);
// console.log(s);


// Q4

// Function printLength takes value: string | string[] | number.

// If it’s a string → print string length

// If it’s an array → print array length

// If it’s a number → print "Not applicable"


// function printLength(value:string|string[]|number){
//     if(typeof(value)==="string"){
//         console.log(value.length);
        
//     }else if(Array.isArray(value)){
// console.log(value.length);

//     }else{
//         console.log("not applicable");
        
//     }
// }
// printLength(["bibash","sajan","sandesh","alish"]);
// printLength("Ghanindra");
// printLength(12345);


// 3️⃣ any Practice


// Q5 Create a variable data: any.

// Assign number, then string, then array to it.

// Write a function checkData that:

// If data is an array → return "array detected"

// Else → return the type of data

// let data:any=[12,"string"];



// function checkData(datas:any):any{
// if(Array.isArray(datas)){
//     return "array detected"
    
// }
// return  typeof(datas)
// }

// let checked=checkData(data)
// console.log(checked);

// 4️⃣ Interface Practice

// Q6
// Create an interface called Person with these properties:

// name → string

// age → number

// email → string (optional)

// Create an array of 2 Person objects.
// Write a function printNames that logs all the names of the people in the array.

// interface person{
//     name:string;
//     age:number;
//     email?:string,
// }



// const p:person[]=[
//     {name:"ram",age:25},
//     {name:"bibash",age:23,email:"bohora@gmail.com"}

// ]

// function printNames(arr:person[]):void{
// for(let char of p){
//     console.log(char.name);
    
// }
// }
// printNames(p)


// Q7 – Employee Interface (extends Person)
// Problem:

// You already have the Person interface:

// interface Person {
//     name: string;
//     age: number;
//     email?: string;
// }


// Now create a new interface Employee that extends Person and adds:

// employeeId: number

// department: string

// Create an array of 2 Employee objects.

// Write a function printEmployeeInfo that logs:


// interface Person {
//     name: string;
//     age: number;
//     email?: string;
// }

// interface Employee extends Person{
//     employeeId: number

// department: string
// }

// const arr:Employee[]=[ 
// {name:"bibash",
// age:23,
// employeeId:12,
// department:"IT"
// },
// {name:"Ghanindra",
// age:23,
// employeeId:13,
// department:"Manager"
// }
// ]

// function printEmployeeId(arr:Employee[]){
// for(let emp of arr ){
//   console.log(`Name: ${emp.name}, Age: ${emp.age}, ID: ${emp.employeeId}, Dept: ${emp.department}`);
    
// }}
// printEmployeeId(arr)


// 5️⃣ Type Inference & Annotations
// Q8

// Create a variable count without annotation. Assign it a number.

// Try assigning a string next — what happens?

// var count=12
//  var count="name"


//Q9 Create a function addNumbers(a, b) without annotations.

// What does TS infer as return type?

// Add annotations and see the difference.

// function addNumbers(a,b){
//     return a+b
// }
//     addNumbers(2,3)

//     function addNumbers(a:number,b:number):number{
//     return a+b
// }
//   let addition=  addNumbers(2,3)
//   console.log(addition);
  
// Q10

// Create a type called Shape that can be "circle" | "square"
// Create an interface called Circle with radius: number
// Create an interface called Square with side: number

// Write a function calculateArea(shape: Shape, data: Circle | Square)

// If circle → return area πr²

// If square → return area side²

type Shape="circle"|"square"

interface Circle{
    radius:number
}
interface Square{
    side:number
}
function calculateArea(shape:Shape,data:Circle|Square):number{
if(shape==="square" ){
    const square=data as Square
  return square.side*square.side
}
   const circle = data as Circle;
  return (22/7)*circle.radius*circle.radius


}
let c=calculateArea("square", { side: 5 });
let r=calculateArea("circle", { radius: 7 });
console.log(c,r);
