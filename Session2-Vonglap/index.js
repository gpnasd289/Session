// // 1. Write a program to print out
// //      a. 7 numbers, starting from 0 (no user input)

// let i = 0;
// while (i<7) {
//     console.log(i);    
//     i=i+1;
// }

// //      b. n numbers, starting from 0, n entered by user

// let a = Number(prompt("Enter a number?"));
// for (let i = 0; i < a; i++) {
//     console.log(i);
// }

// //      c. A sequence of numbers, starting from 3, ending before n, n entered by user

// let n = Number(prompt("Enter n?"));
// for (let i = 3; i < n; i++) {
//     console.log(i);
// }

// //      d. A sequence of numbers, starting from s, ending before e, e and s entered by user

// let s = Number(prompt("Enter start?"));
// let e = Number(prompt("Enter end?"));
// for (let i = s; i < e; i++) {
//     console.log(i);
// }

// //      d. A sequence of numbers, starting from s, ending before e, stepping by 3, e and s entered by user

// let s = Number(prompt("Enter start?"));
// let e = Number(prompt("Enter end?"));
// for (let i = s; i < e; i+=3) {
//     console.log(i);
// }

// //      e. A sequence of numbers, starting from s, ending before e, stepping by c, e and s entered by user

// let s = Number(prompt("Enter start?"));
// let e = Number(prompt("Enter end?"));
// let c = Number(prompt("Enter step? "));
// for (let i = s; i < e; i+=c) {
//     console.log(i);
// }

// // 2. Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user

// let n = Number(prompt("Enter n?"));
// let f = 1;
// for (let i = 1; i <= n; i++){
//     f = f * i;
//     console.log(f);
// }

// // 3. Write a program asking users their age, and then decide if they are old enough to view a 14+ content

// let a = Number(prompt("How old are you?"));
// if (a<14) {
//     console.log("You are not old enough to view this content");
// } else {
//     console.log("Enjoy!");
// }

// // 4. Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range

// let a = Number(prompt("Enter a number from 0-9"));
// while (a >= 0 && a <= 9) {
//     if (a <= 4) {
//         console.log("Lower half");
//     } else {
//         console.log("Higher half");
//     }
// }

// // 5. Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n

// let x = Number(prompt("x = "));
// let n = Number(prompt("n = "));
// while (x >= 0 && x <= n) {
//     if (x <= Math.floor(n/2)) {
//         console.log("Lower half");
//     } else {
//         console.log("Higher half");
//     }
// }

// // 6. Write a script to check if a number is even (divisible by 2) or odd number

// let x = Number(prompt("x = "));
// if (x % 2 == 0) {
//     console.log(`${x} is even number`);
// } else {
//     console.log(`${x} is odd number`);
// }

// // 7. Write a program to print out
// //      a. 6 L’s and H’s, half L’s, half H’s (L means low, H means high)

// for (let i = 1; i <= 6/2; i++) {
//     console.log("L");
// }
// for (let i = 1; i <= 6/2; i++) {
//     console.log("H");
// }

// //      b. n L’s and H’s in total, n entered by user

// let n = Number(prompt("Enter the total number of L's and H's"));
// let x = Math.floor(n/2);
// let y = n-x;
// for (let i = 1; i <= y; i++) {
//     console.log("L");
// }
// for (let i = 1; i <= x; i++) {
//     console.log("H");
// }

// //      c. 8 1’s and 0’s in total, consecutively

// for (let i = 1; i <= 8/2; i++) {
//     console.log(0);
//     console.log(1);
// }

// //      d. n 1’s and 0’s in total, consecutively, n entered by user

// let n = Number(prompt("Enter the total number of 1's and 0's"));
// for (let i = 1; i <= n/2; i++) {
//     console.log(0);
//     console.log(1);
// }

// 8. Write a script to calculate the BMI (Body Mass Index) of a person

let w = Number(prompt("Your weight in kg"));
let hcm = Number(prompt("Your height in cm"));
let hm = hcm*100;
let bmi = w/(hm**2);
if(bmi < 16){
    console.log("Severely underweitght");
};
if(bmi >= 16 && bmi < 18.5){
    console.log("Severely underweitght");
};
if(bmi >= 18.5 && bmi < 25){
    console.log("Severely underweitght");
};
if(bmi >= 25 && bmi <= 30){
    console.log("Severely underweitght");
};
if(bmi > 30){
    console.log("Severely underweitght");
};
