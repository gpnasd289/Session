// console.log("My name is Aaron");

// Câu điều kiện rẽ nhánh 
// if(condition){
//     //code
// }
// else{
//     //code
// }

// Kiểu dữ liệu boolean(true, false)
//  const a = 5;
//  console.log(a == '5');
//  console.log(a === "5");
 
// const x=5;
// const y=10;
// console.log((x===5)||(y>10));

// const a = Number(prompt("Nhập tuổi của bạn"));

// if(a<18){
//     //logic code
//     console.log("Chưa đủ tuổi vào bar");
// }
// else if(a>=18&&a<21){
//     //logic code
//     console.log("Vào bar nhưng ko được uống rượu");
// }
// else{
//     //logic code
//     console.log("Thoải mái");
// }

// nhỏ hơn 0:invalid age
// =23: chưa được lấy chồng
// tuổi lẻ: tuổi là số lẻ
// tuổi là số có thể căn bậc 2: perfect square

// const a = Number(prompt("Nhập tuổi của bạn"));
// if(a<0){
//     console.log("Invalid age");
// }
// else if(a=23){
//     console.log("Chưa được lấy chồng");
// }
// else if(Math.sqrt(a)%1==0){
//     console.log("perfect square");
// }
// else{
//     console.log("whatever");
// }


//Vòng lặp

// let i = 1;
// while(i<10){
//     console.log(i);
//     i = i+1;
// }

// BT: cho người dùng nhập bất kỳ từ 1-10
// Tạo ra 1 số random từ 1-10
// Nếu số người dùng nhập nhỏ hơn thì in ra số bé thế 
// Nếu lớn hơn thì in ra số lớn thế 
// Nếu trùng nhau thì in ra turtle dog

// let ranNum = Math.floor(Math.random()*10)+1;

// console.log(ranNum);
// let boolean = true;
// while(boolean === true){
//     let a = Number(prompt("Nhập 1 số từ 1-10"));
//     if(a < ranNum){
//         console.log("Số bé thế");
//     }
//     else if(a > ranNum){
//         console.log("Số lớn thế");
//     }
//     else{
//         console.log("Turtle dog");
//         boolean = false;
//     }
// }

// for (let index = 1; index < 5; index++) {
//     console.log(index);
// }

//BT sử  dụng vòng for tính tổng các số từ 1 đến số mà người dùng nhập
// let a = Number(prompt("Nhập 1 số"));
// let tong=0;
// for(let i=1; i<=a; i++){
//     tong+=i;
//     console.log(tong);
// }