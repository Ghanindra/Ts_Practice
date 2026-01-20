// 🔹 Q1 — Class, Constructor & Object

// Create a class Student with:

// name (string)

// age (number)

// Use a constructor to initialize them.
// Create one object and log it.

// Q2 — Method & this step by step.

// We want a method introduce() in the Student class that prints:
// class Student{
//     public name;
//     public age;
//     constructor( name:string, age:number){
//         this.name=name;
//         this.age=age;
//     }
// introduce(){
//     console.log(`hi my name is ${this.name} and iam ${this.age} years old`);
    
// }
// }
// let u1=new Student("sajan",23)
// u1.introduce()
// console.log(u1);

// Q4 — Getter & Setter Practice

// Task:

// In your BankAccount class:

// Keep balance as private

// Keep accountNumber as public

// Create a getter called getBalance that returns the current balance.

// Create a setter called deposit that:

// Takes an amount: number

// Adds it to balance

// Only allows positive amounts

// Test your class:

// Create an object of BankAccount

// Try depositing some money

// Read balance using the getter


// class BankAccount{
//     public accountNumber:number=123455;
//     private balance:number=567788;


//     getBalance(){
//     return this.balance
// }
// setDeposit(amount:number){
//     if(amount>0){
//         return this.balance+=amount
//     }
// }

// }



// let u1=new BankAccount()
// u1.setDeposit(200)
// console.log(u1.getBalance())



// Q5 — Static Property & Method

// Task:

// Create a class Counter with:

// A static property count initialized to 0

// A static method increment() that increases count by 1

// Call increment() without creating an object

// Print the value of count after a few increments

// class Counter{
//     static count:number=0;



//     static increment(){
//        this. count++
//         // console.log(this.count);
        
//     }
// }
// Counter.increment()
// Counter.increment()
// console.log(Counter.count);


// Simplified Q6 — Using extends Only

// Task:

// Create a class Person with:

// name: string

// age: number

// Create a class Employee that extends Person and adds:

// employeeId: number

// department: string

// In the Employee constructor:

// Use super(name, age) to set the parent properties

// Set employeeId and department in the child class

// Create 2 Employee objects and console.log() them

// Focus:

// How extends allows child class to reuse parent properties

// Using super() in constructor

// class Person{
//     public name;
//     public age;
//     constructor(name:string,age:number){
//         this.name=name;
//         this.age=age;
//     }
// }

// class Employee extends Person{
//   public  employeeId;
//     public department;
//     constructor(name:string,age:number,employeeId:number,department:string){
//   super(name,age)
//    this.employeeId=employeeId;
//    this.department=department;
//     }
// }
// let e=new Employee("bibash",23,1,"IT")
// console.log(e);


// Q7 — Protected Modifier

// Task:

// Create a class Person with:

// name: string → protected

// age: number → protected

// Create a class Employee that extends Person and adds:

// employeeId: number

// department: string

// A method getDetails() that prints:

// Name: <name>, Age: <age>, ID: <employeeId>, Dept: <department>


// Try to access name and age outside the class — see what happens.

// Focus:

// protected allows child classes to access parent properties, but not outside.

// Difference between public, private, and protected.


// class Person{
//     protected name;
//     protected age;
// constructor(name:string,age:number){
//     this.name=name;
//     this.age=age;
// }
// }
// class Employee extends Person{
//     public employeeId;
//     public department;
//     constructor(name:string,age:number,employeeId:number,department:string){
//     super(name,age)
//         this.employeeId=employeeId
//      this.department=department
//     }


//     getDetails():void{
// console.log(`Name: ${this.name}, Age: ${this.age}, ID: ${this.employeeId}, Dept: ${this.department}
// `);

//     }
// }
// let emp = new Employee("Bibash", 23, 1, "IT");
// emp.getDetails();   

     

// Q8 — Abstract Class Practice

// Task:

// Create an abstract class Shape with:

// An abstract method calculateArea(): number

// A concrete method describe() that prints "This is a shape"

// Create two classes that extend Shape:

// Circle with property radius: number

// Square with property side: number

// Implement calculateArea() in each child class:

// Circle → π * radius * radius

// Square → side * side

// Test by creating objects of Circle and Square and calling:

// calculateArea()

// describe()

abstract class Shape{
abstract calculateArea():number;
describe(){
console.log("this is shape");

}


}

class Circle extends Shape{
radius:number;
constructor(radius:number){
super()
this.radius=radius
}
calculateArea():number{
return Math.PI*this.radius*this.radius
}
}
class Square extends Shape{
side:number;
constructor(side:number){
    super()
    this.side=side;
}
calculateArea():number{
    return this.side*this.side
}
}
let c=new Circle(7)
console.log(c.calculateArea()
);
c.describe()

let s=new Square(3)
console.log(s.calculateArea());
s.describe()
