const form = document.getElementById("form");

const ul = document.getElementById("ul");

form.onsubmit = function(event) {
    event.preventDefault();

    const title = (form.title.value);

    const newLi = document.createElement("li");
    newLi.innerText = title;
    ul.appendChild(newLi);

    const closebtn = document.createElement("button");
    closebtn.innerText = "x";
    newLi.appendChild(closebtn);

    form.title.value='';

    closebtn.classList.add("closebtn");

    closebtn.onclick = function() {
        newLi.remove();
    }

    newLi.onclick = function(event) {
        event.target.classList.toggle("click");

    }

}