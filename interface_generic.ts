// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   discount?: number;
// }

// const products: Product = {
//   id: 1,
//   name: "bibash",
//   price: 22,
//   discount:22
// };

// console.log(products);

// ENUM

// enum Role{
//     Admin="admin",
//     User="user",
//     Guest="Guest"
// }

// let myRole:Role=Role.User
// console.log(myRole);

// GENERIC FUNCTION
// function wrapArray<T>(data:T):T[]{
// return [data]
// }

// let res=wrapArray({name:"sajan",age:"22"})
// console.log(res);

// Extending interface

// interface user{
//     name:string;
//     age:number;
// }

// interface admin extends user{
//     role:string;
// }

// const owner:admin={
//     name:"sajan",
//     age:22,
//     role:"user"
// }
// console.log(owner);

// interface Animal{
//     species:string;
//     age:number;
// }
// interface Dog extends Animal{
//     breed:string
// }
// const Dog={
//     "species":"germen",
//     "age":4,
//     "breed":"male"
// }
// console.log(Dog);

// type status="active"|"inactive"|"pending"

// interface Address{
//     city:string;

// }
// interface contact{
//     phone:string;
// }
// type userInfo=Address&contact
// const person:userInfo={
//     "city":"itahari",
//     "phone":"983456753",
   
    
// }
// console.log(person);

// ADVANCED GENERICS

// function wrapPair<T,U>(first:T,second:U):[T,U]{
// return [first,second]
// }
// const pair=wrapPair(1,"one")
// console.log(pair);

// CONSTRAINTS
// sometime you want T to have property

// interface hasLength{
//     length:number;
// }

// function logLength<T extends hasLength>(item:T){
// console.log(item.length);

// }
// logLength("Hello");
// logLength([1,2,3]);

// const user={name:"sita",age:25}

// function getFirstProperty<T,K extends keyof T>(obj:T,key:K){
// console.log(obj[key]);

// }
// getFirstProperty(user,"name")
// getFirstProperty(user,"age")

// ENUM CAN BE USED IN LOGIC,MAPPING OR APIS.

// enum Role{
//     Admin="admin",
//     User="user"
// }

// function canEdit(role:Role){
// return role===Role.Admin;
// }
// console.log(canEdit(Role.User));

// enum color{
//     red="red",
//     green="green"
// }

// function getHex(color:color):color{
//     return color
// }
// console.log(getHex(color.green));
