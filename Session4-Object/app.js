// Object 
// Khai bao obj
//let obj = Object.create({});
//let obj = new Object();
// let obj = {
//     name: "Aaron",
//     age: 18
// }
// // // key: name, age
// // // value: Aaron, 18
// // console.table(obj);

// //Create
// obj.address = "HN";

// //Read one and read all
// // console.log(obj.name);
// // console.log(obj.age);

// // Dung vong for in ra tat ca value - Read all
// for (let key in obj){
//     console.log(`${key}: ${obj[key]}`);
// }

// //Update
// obj.name="Aiden";
// obj.age=20;
// console.table(obj);

// //Delete
// delete obj.address;
// console.table(obj);

//BT: Cho nguoi dung nhap CRUD
//C: Nhap ten va tuoi, them vao mang duoi dang obj va in ra
//R: In ra
//U: 
//D: 
// const friend = [
//     obj1 = {
//         name: "Aaron",
//         age: 20
//     },
//     obj2 = {
//         name: "Aiden",
//         age: 21
//     }
// ]
// let userInput = prompt("Enter C/R/U/D");
// if (userInput == "C") {
//     let name = prompt("Enter name");
//     let age = prompt("Enter age")
//     let objAdd = {
//         name: name,
//         age: age
//     }
//     friend.push(objAdd);
//     console.table(friend);
// }
// else if (userInput == "R") {
//     for(let key in friend){
//         for(let keyo1 in obj1){
//             console.log(`${keyo1}-${obj1[keyo1]}`);
//         }
//         for(let keyo2 in obj2){
//             console.log(`${keyo2}-${obj1[keyo2]}`);
//         }
//         for(let keyoA in objAdd){
//             console.log(`${keyoA}-${objAdd[keyoA]}`);
//         }
//     }
// }
// else if (userInput == "U"){
//     let indexFind = prompt("Enter index u want to find");
//     if (index < friend.length) {
//         let nameUpdt = prompt("Enter name u want to update")
//         frien[index] = nameUpdt
//     }
//     else{
//         console.log("Lam gi co");
//     }
// }
// else if (userInput == "D") {
//     let indexFind = prompt("Enter index u want to find");
//     if (index < friend.length) {
//         friend.splice(index,1);
//     }
//     else{
//         console.log("Lam gi co");
//     }
// }

// Function - Hàm

// Dinh nghia
// function name(a,b,c,(optional)){
//     //logic
//     //return(optional)
// }

//VD In ra tu 1-9
// function print() {
//     for(let i=0; i<10; i++){
//         console.log(i);
//     }
// }
// print();
// function print(a,b) {
//     for(let i=a; i<b; i++){
//         console.log(i);
//     }
// }
// print(0,10)

// Viet function cho nguoi dung nhap 1 canh hinh vuong roi tinh the tich
// Nhap vap 1 mang bat ky Tinh tong va tich cac phan tu trong mang
function volume() {
    const a =  Number(prompt("Enter a"));
    console.log(`Volume of the cube is ${a*a*a}`);
}
volume();
let sum = 0;
let mutiply = 1;
function sm(){
    let arr = prompt("Enter").split(",");
    for (let i = 0; i < arr.length; i++) {
        sum+=arr(i);
        mutiply*=arr(i);
    }
    return sum;
    return mutiply;
}
console.log(`${sum} and ${mutiply}`);