// Array - Mảng
// Khai bao mang

// let array = [1, "dsasd",[1,2,3], true];
// console.log(array);
// let number = ["2132132", "231561"];
// console.log(number);

// Mot so thuat ngu cua mang (index, value, length)
//index
// let number = [1,2,3,4];
// //index       0 1 2 3  length - 1
// //value       1 2 3 4  
// //length la do dai mang
// //value la gia tri mang
// console.log(number);

// Mot so thao tac voi mang (C,R,U,D)

//Read
// let name = ["Aaron", "Aiden", "Aurora", "A"];
// // console.log(name[0]);
// for (let index = 0; index < name.length; index++) {
//     const element = name[index];
//     console.log(name[index]);
// }

//Update
// let name = ["Aaron", "Aiden", "Aurora", "A"];
// console.log(name);
// name[4] = "Apache";
// console.log(name);
// vd cho 1 mang number = [1,2,3,4], update toan bo phan tu trong mang tang len 10dv
// let name = [1,2,3,4];
// for (let index = 0; index < name.length; index++) {
//     name[index]=name[index]+10;
//     console.log(name[index]);
// }

//Create 
// let name = ["Aaron", "Aiden", "Aurora", "A"];
// //Create first/last
// name.unshift("Apache");//first
// console.log(name);
// name.push("April");//last
// console.log(name);

//Delete
// let name = ["Aaron", "Aiden", "Aurora", "A"];
// //Delete first/last
// name.shift();//first
// console.log(name);
// name.pop();//last
// console.log(name);
//Delete 1 phan tu khi biet index
//name.splice(index, amount)



//BT Cho người dùng nhập vào 4 thao tác là chữ (C, R, U, D)
//C: cho người dùng nhập nội dung và push vào cuối mảng
//In ra toàn bộ nội dung của mảng
//R: In ra toàn bộ nội dung
//U: Hỏi người dùng chỉ số muốn update rồi cập nhật và in ra mảng 
//D: Hỏi người dùng chỉ số muôn xoá rồi xoá và in ra mảng

let name = ["Aaron", "Aiden", "Aurora", "A"];
let a = prompt("Nhấn C để nhập, R để in, U để cập nhật, D để xoá, E để thoát");
while(a == 'C'||a == 'R'||a == 'U'||a == 'D'||a == 'E'){
    if(a=='C'){
        let content = prompt("Nhập thông tin muốn nhập");
        name.push(content);
        console.log(name);
    }
    if(a=='R'){
        console.log(name);
    }
    if (a=='U') {
        let i = prompt("Nhập chỉ số của phần tử muốn update");
        let inputUpdate = prompt("Nhập nội dung update");
        name[i]=inputUpdate;
        console.log(name);
    }
    if (a=='D') {
        let i = prompt("Nhập chỉ số của phần tử muốn update");
        name.splice(i,1);
        console.log(name);
    }
    if (a=='E') {
        break;
    }
}
