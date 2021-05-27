// // 1.Write a script to ask users enter a sequence of numbers, the Numbers are separated by 
//commas, calculate the sum of the numbers and show it to users
// let a = prompt("Enter a sequence of number, separated by commas");
// let sum = 0;
// a = a.split(",");
// for (let i = 0; i < a.length; i++) {
//     sum+=parseInt(a[i]);
// }
// console.log(sum);

// // 2.Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users
// let a = prompt("Enter a sequence of number, separated by commas");
// a = a.split(",");
// console.log(Math.min(...a));

// // 3.Create an array containing at least 5 numbers, then ask users enter a number,
// // perform a search to look for the number in the array, if the number is found, 
// // tell user that with the index of it in the array, if not, also tell them so
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let a = Number(prompt("Enter a number"));
// check = arr.indexOf(a);
// for (let i = 0; i < arr.length; i++) {
//     if (check == -1) {
//         console.log(`${a} is NOT FOUND in my array`);
//     } else {
//         console.log(`${a} is FOUND in my array at index ${check}`);
//     }
// }

// 4.Sheep
// // 4.1.Create an array to represent the sizes of your flock, and log all of your flock size, 
// // expected screen output:
// let arr = [5, 7, 300, 90, 24, 50, 75];
// console.log(`Hello my name is Aaron and here is my sheep size:\n${arr}`);

// // 4.2.At the end of each month, you have to choose one and only one sheep to shear and 
// // thus you want to choose the biggest one to maximize your profit. Add scripts to search for 
// // the biggest sheep in your list:
// let arr = [5, 7, 300, 90, 24, 50, 75];
// console.log(`Hello my name is Aaron and here is my sheep size:\n${arr}`);
// console.log(`Now my biggest sheep has size ${Math.max(...arr)}, let's shave it`);

// // 4.3.When your biggest sheer, its size will return to the default size, which is 8.
// let arr = [5, 7, 300, 90, 24, 50, 75];
// max = Math.max(...arr);
// console.log(`Hello my name is Aaron and here is my sheep size:\n${arr}`);
// console.log(`Now my biggest sheep has size ${max}, let's shave it`);
// imax = arr.indexOf(max);
// arr[imax] = 8;
// console.log(`After shearing, here is my flock:\n${arr}`);

// // 4.4.In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out
// let arr = [5, 7, 300, 90, 24, 50, 75];
// max = Math.max(...arr);
// console.log(`Hello my name is Aaron and here is my sheep size:\n${arr}`);
// console.log(`Now my biggest sheep has size ${max}, let's shave it`);
// imax = arr.indexOf(max);
// arr[imax] = 8;
// console.log(`After shearing, here is my flock:\n${arr}`);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + 50;
// }
// console.log(`MONTH 1\nOne month has passed, my sheeps have grown, here are their sizes\n${arr}`);

// // 4.5.Let’s do this for 4 months (or as long as you want)
// let arr = [5, 7, 300, 90, 24, 50, 75];

// console.log(`Hello my name is Aaron and here is my sheep size:\n${arr}`);
// for (let i = 1; i <= 5; i++) {
//     max = Math.max(...arr);
//     console.log(`Now my biggest sheep has size ${max}, let's shave it`);
//     imax = arr.indexOf(max);
//     arr[imax] = 8;
//     console.log(`After shearing, here is my flock:\n${arr}`);
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] + 50;
//     }
//     console.log(`MONTH ${i}\nOne month has passed, my sheeps have grown, here are their sizes\n${arr}`);
// }

// // 4.6. Sell all
// let arr = [5, 7, 300, 90, 24, 50, 75];
// let sum = 0;
// console.log(`Hello my name is Aaron and here is my sheep size:\n${arr}`);
// for (let i = 1; i <= 5; i++) {
//     max = Math.max(...arr);
//     console.log(`Now my biggest sheep has size ${max}, let's shave it`);
//     imax = arr.indexOf(max);
//     arr[imax] = 8;
//     console.log(`After shearing, here is my flock:\n${arr}`);
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] + 50;
//     }
//     console.log(`MONTH ${i}\nOne month has passed, my sheeps have grown, here are their sizes\n${arr}`);
// }
// for (let i = 0; i < arr.length; i++) {
//     sum+=arr[i];
// }
// let money = sum*2;
// console.log(`My flock has size in total: ${sum}\nI would get ${sum} * 2$ = ${money}`);

// // 5.Write a script asking users to enter a sequence of names, separated by commas (,), 
// // Create a new array containing the names, each surrounded with <>.
// let a = prompt("Enter a sequence of name, separated by commas");
// a = a.split(",");
// const newArr = [];
// for (let i = 0; i < a.length; i++) {
//     newArr.push(`<${a[i]}>`);
// }
// // let newArr = a.replace(/,/g,'><').split(",");

// console.log(newArr);

// // 6.Write a script asking users to enter a sequence of Numbers, separated by commas (,). 
// // Create a new array containing only the odd Numbers of the entered sequence.
// let arr = prompt("Enter a sequence of number, separated by commas");
// arr = arr.split(",");
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);
