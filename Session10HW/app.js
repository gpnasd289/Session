// Ex1
const btn1 = document.getElementById("btn1");
const content1 = document.getElementById("content1");
btn1.onclick = function(){
    if (content1.style.display == 'block') {
        content1.style.display = 'none';
    } else {
        content1.style.display = 'block'
    }
}

// Ex2
const btn2 = document.getElementById("btn2");
const content2 = document.getElementById("content2");
btn2.onclick = function(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    content2.style.backgroundColor = "#" + randomColor;
}

// Ex3
const btn3 = document.getElementById("btn3");
const content3 = document.getElementById("content3");
const khoi1 = document.getElementById("block1");
const khoi2 = document.getElementById("block2");
btn3.onclick = function(){
    let a = khoi1.innerHTML;
    khoi1.innerHTML = khoi2.innerHTML;
    khoi2.innerHTML = a;
}

//Ex4
const btn4 = document.getElementById("btn4");
const content4 = document.getElementById("content4");
content4.style.fontSize = '14px';
let fontSize = 14;
btn4.onclick = function(){
    content4.style.fontSize = `${fontSize++}px`;
}