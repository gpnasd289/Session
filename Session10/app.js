// console.log(document);
// //query HTML selector
// document.getElementById("h3");
// let span = document.getElementsByTagName("span");
// for (let i = 0; i < span.length; i++) {
//     console.log(span[i]);
// }

// // Lay theo tagname
// const tagName  = document.getElementsByTagName("span");
// console.log(tagName);
// //Lay theo queryselector
// const title = document.querySelector(".span");
// console.log(title);
// const queryAll = document.querySelectorAll(".span")
// console.log(queryAll);

// // property and method
// const app = document.getElementById("app")
// console.dir(app);
// // text and content
// console.log(app.innerHTML);
// console.log(app.innerText);
// console.log(app.textContent);
// // style
// console.log(app.style);
// app.style.color = 'red';
// app.style.backgroundColor = 'pink';

// // cho 1 the div chua noi dung
// // thay doi mau, font-size , background-color, in dam noi dung
// const test = document.getElementById("test");
// console.log(test.style);
// test.style.color = 'blue';
// test.style.backgroundColor = 'black';
// test.style.fontSize = 'large';
// test.style.fontWeight = 'bold';

const ul = document.getElementById("ul");
console.log(ul.children[2].parentElement);
