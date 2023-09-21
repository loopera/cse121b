/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Arianne Looper"; //1
let currentYear = new Date().getFullYear(); //2
const profilePicture = "images/profilepic.jpg"; //3


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name"); //1
const foodElement = document.getElementById("food"); //2
const yearElement = document.querySelector("#year"); //3
const imageElement = document.querySelector("img"); //4 


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`; //1 & 2
yearElement.textContent = `${currentYear}`; //3
imageElement.setAttribute("src", "images/profilepic.jpg"); //4
imageElement.setAttribute("alt", `Profile image of ${fullName}`); //5


/* Step 5 - Array */
let foodArray = ['Lechon', 'Carbonara', 'Mango', 'Chocolates', 'Bruschetta', 'Fried Moonfish']; //1
foodElement.textContent = foodArray; //2
let foodSingle = "Tomatoes"; //3
foodArray.push(foodSingle) //4
foodElement.innerHTML += `<br>${foodArray}`; //5
foodArray.shift() //6
foodElement.innerHTML += `<br>${foodArray}`; //7
foodArray.pop() //8
foodElement.innerHTML += `<br>${foodArray}`; //9
