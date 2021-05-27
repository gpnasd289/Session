// 1.Initialize a variable named products, containing an array of products, each product has a name, price, brand, category, and color
const ps = [
    {
        name : "Xiaomi charger",
        brand : "Xiaomi",
        price : 428,
        color : "White",
        category : "charger"
    },
    {
        name : "VSmart Active",
        brand : "Vsmart",
        price : 5487,
        color : "Black",
        category : "phone"
    },
    {
        name : "IPhone X",
        brand : "Apple",
        price : 21490,
        color : "Gray",
        category : "phone"
    },
    {
        name : "Samsung Galaxy A9",
        brand : "Samsung",
        price : 8490,
        color : "Blue",
        category : "phone"
    }
]

// // 1.1.Print/log name and price of all the products out 

// for (let index = 0; index < ps.length; index++) {
//     console.log(`Name: ${ps[index].name}\nPrice: ${ps[index].price}\n----------\n`);
// }

// 1.2.Write a script printing/logging out the products with their number, 
// then print/logging out the details of a product with its position entered by users

// for (const key in ps) {
//     console.log(`#${Number(key)+1}. ${ps[key].name}`);
// }
// let userInput = Number(prompt("Enter product pos"))
// console.log(`Name: ${ps[userInput-1].name}\nBrand: ${ps[userInput-1].brand}\nPrice: ${ps[userInput-1].price}\nColor: ${ps[userInput-1].color}\n`);

// // 1.3.Write a script printing/logging out the products based on category input by users

// let userInput = prompt("Enter your category");
// for (const key in ps) {
//     if (ps[key].category === userInput) {
//         console.log(`Name: ${ps[key].name}\nPrice: ${ps[key].price}\n----------\n`);
//     }
// }

// // 1.4.Add providers to each product

// ps[0].providers = "Phukienzz";
// ps[1].providers = "Tgdd";
// ps[2].providers = "Tgdd";
// ps[3].providers = "Tgdd";
// for (const key in ps) {
//     console.log(`#${Number(key)+1}. ${ps[key].name}\nPrice: ${ps[key].price}\nProviders: ${ps[key].providers}`);
// }

// // 1.5.Search the products based on the wanted provider entered by users
// let userInput = prompt("Enter your provider");
// for (const key in ps) {
//     if (ps[key].providers === userInput) {
//         console.log(`Name: ${ps[key].name}\nPrice: ${ps[key].price}\n----------\n`);
//     }
// }

// 2.Write a script to store and process the learning tasks to become a front-end developer

const lt = [
    {
        name : "HTML",
        complete : "false"
    },
    {
        name : "CSS",
        complete : "false"
    },
    {
        name : "JS",
        complete : "false"
    },
    {
        name : "nps",
        complete : "false"
    },
    {
        name : "Git",
        complete : "false"
    }
]

// 2.1.Print out
console.log("Hi there, this is your learning tasks to front-end developer career:\n");
for (const key in lt) {
    console.log(`${lt[key].name}\nComplete: ${lt[key].complete}\n`);
}

// 2.2. Let users add new task
let userInput = prompt("Enter ur command (New, Del, Upd, Cpl)")
if(userInput === "new"){
    let newTask = prompt("Enter new task");
    let nt = {
        name : newTask,
        complete :  "false"
    }
    lt.push(nt);
}
else if(userInput === "upd"){
    let updPos = Number(prompt("Enter position u want to update"));
    let updTitle = prompt("Enter new title");
    lt[updPos].name = updTitle;
}
// else if(userInput === "cpl"){
//     let cplPos = Number(prompt("Enter position u want to complete"));
//     lt[cplPos].complete = "true";
// }
else if(userInput === "cpl"){
    let cplPos = Number(prompt("Enter position u want to complete")) -1;
    lt[cplPos].complete = "true";
    for (let i = 0; i < lt.length; i++) {
        if(lt[i].complete === "true") {
            console.log(`${i+1}. [x] ${lt[i].name}`);
        }else {
            console.log(`${i+1}. [ ] ${lt[i].name}`);
        }
    }
}
else if(userInput === "del"){
    let delPos = Number(prompt("Enter position u want to delete"));
    lt.splice(delPos,1);
}
console.log("Hi there, this is your learning tasks to front-end developer career:\n");
for (const key in lt) {
    console.log(`${lt[key].name}\nComplete: ${lt[key].complete}\n`);
}
