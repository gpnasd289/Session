// // 1.viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không
// let userInput = prompt("Enter string")
// function find(str){
//     let a = str.startsWith('Java',0);
//     return a;
// }
// console.log(find(userInput));

// 2.  - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
//  - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
//  - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0

// let a = [1, -10, 5, 18, -9, 5];
// function findMaxDiff(arr){
//     let maxDiff = 0;
//     for (let i = 0; i < findMaxDiff.length; i++) {
//     for (let j = 1; j <= findMaxDiff.length; j++) {
//         if(Math.abs(arr[i]-arr[j]) > maxDiff){
//             maxDiff = Math.abs(arr[i]-arr[j]);
//         }
//     }
//     }
//     return maxDiff;
// }

// console.log(findMaxDiff(a));

// // 3. viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì trả về 1 
// // mảng chứa n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). 
// // Nếu n <= 0 thì trả về mảng trống
// let a = [1, -10, 5, -5, 18]
// function first(arr,n) {
//     if (n <= 0) {
//         arr=[];
//         return arr;
//         console.log(arr);
//     }
//     else if(n < arr.length){
//         arr.fill(arr[0],0,n);
//         arr.splice(n,arr.length);
//         return arr;
//         console.log(arr); 
//     }
//     else{
//         return arr;
//         console.log(arr);
//     }
// } 
// console.log(first(a,3));

// // 4.Viết hàm checkInt để kiểm tra hai số nguyên được nhập vào. 
// // Nếu có 1 số âm và một số dương thì trả về true. 
// // Các trường hợp khác trả về false. 
// // Số 0 là số không âm cũng không dương
// function checkInt(a,b) {
//     if (a*b<0) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(checkInt(-1,2));

// // 5.Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu só đó và 13, 
// // nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.

// function sub(n) {
//     a = Math.abs(n-13);
//     if (n>13) {
//         a = a*2;
//         return a;
//     }
//     else{
//         return a;
//     }
// }
// console.log(sub(5));

// // 6.Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số
// let a = [1,2,3,8,9];
// function findMaxSub(arr) {
//     return Math.max(...arr) - Math.min(...arr);
// }
// console.log(findMaxSub(a));