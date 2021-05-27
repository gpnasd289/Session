// // 1.Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả
// let a = prompt("Enter string");
// function reverse(str){
//     newStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr;
// }
// console.log(reverse(a));

// // 2.Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu 
// // của chữ mỗi chữ được viết hoa. 
// let a = prompt("Enter string");
// function upperCase(str){
//     let splitStr = str.toLowerCase().split(" ");
//     for (let i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
//     }
//     return splitStr.join(" ");
// }
// console.log(upperCase(a));

// // 3.Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả.
// let a = prompt("Enter array").split(" ");
// function unique(arr){
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!newArr.includes(arr[i])) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(unique(a));

// // 4.Tạo dữ liệu của 3 nhân viên mindX (gồm tên, tuổi, mức lương, chức vụ).
// // Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete).
// const data = [
//     {
//         name : "A",
//         age : "18",
//         salary : "2m",
//         position : "nv"
//     },
//     {
//         name : "B",
//         age : "20",
//         salary : "5m",
//         position : "tp"
//     },
//     {
//         name : "C",
//         age : "26",
//         salary : "10m",
//         position : "gd"
//     }
// ]
// let userInput = prompt("Enter C/R/U/D");
// if (userInput === "C") {
//     let name = prompt("Enter name");
//     let age = prompt("Enter age");
//     let salary = prompt("Enter salary");
//     let position = prompt("Enter position");
//     let objAdd = {
//         name: name,
//         age: age,
//         salary: salary,
//         position: position
//     }
//     data.push(objAdd);
//     console.table(data);
// }
// else if (userInput === "R") {
//     for(let key in data){
//         console.log(`Name:${data[key].name}\nAge: ${data[key].age}\nSalary: ${data[key].salary}\nPosition: ${data[key].position}\n`);
//     }
// }
// else if (userInput === "U"){
//     let indexFind = prompt("Enter index u want to find");
//         if (indexFind < data.length) {
//             let nameUpdt = prompt("Enter name u want to update")
//             data[indexFind].name = nameUpdt
//         }
//         else{
//             console.log("ERROR!!");
//         }
// }
// console.table(data);
// else if (userInput === "D") {
//     let indexFind = prompt("Enter index u want to find");
//     if (indexFind < data.length) {
//         data.splice(index,1);
//     }
//     else{
//         console.log("ERROR!!");
//     }
// }
// console.table(data);

// 5.Viết chương trình cho phép người dùng nhập vào ngày tháng năm
// Kiểm tra xem ngày tháng năm đó có hợp lệ hay không