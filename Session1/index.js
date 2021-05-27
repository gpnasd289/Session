// 1.Write a script to ask user about their name, and then say hi to them, say something nice to them if you want :)
let name = prompt('Hi there, your name please?');
alert(`Hi ${name}`);

// 2.Write a script that ask 2 things from users, their first name and last name, then greet them with their full name
let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
let fullName = `Hi ${lastName} ${firstName}`;
alert(fullName);

// 3.Write a script that calculates the area of a square
let length = prompt("Enter side length of the square");
let areas = length ** 2;
alert(`The square area is ${areas}`);

// 4.Write a script that calculates the area of a circle
let radius = prompt("Enter the radius of the circle");
let areac = radius ** 2 * 3.14;
alert(`The circle area is ${parseFloat(areac).toFixed(1)}`);

// 5.Write a script that converts Celsius (0C) into Fahrenheit (0F)
let tempC = prompt("Enter the temperature in Celcius");
let tempF = tempC * 1.8 + 32;
alert(`${tempC} (°C) =  ${parseFloat(tempF).toFixed(1)} (°F)`);