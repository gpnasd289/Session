const btn = document.getElementById("btn");

const form = document.getElementById("form");

const ul = document.getElementById("ul");

form.onsubmit = function(event){
    event.preventDefault();
    
    // B1: Lấy dữ liệu đầu vào từ người dùng
    const title = console.log(form.title);
    console.log(form.title.value);

    // B2: Tạo thẻ li
    const newLi = document.createElement("li");   
    const newBtn = document.createElement("button");
    
    // B3: Gán nội dung cho thẻ li
    newLi.innerText = title;
    newBtn.innnerText = 'Delete';
    
    // B4: appenChild vào ul
    ul.appendChild(newLi);
    newLi.appendChild(newBtn);
    form.title.value = '';

    // xoa
    newBtn.onclick = function(){
        console.log(newLi.remove);
        console.log(newBtn.remove);
    }
}
