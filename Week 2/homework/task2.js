const myName = "Ashish (Ash) Jain";
const currentYear = new Date().getFullYear();
const myPicture = "./img/my-img.png";

var nameID = document.getElementById("name");
nameID.innerHTML = myName;
var yearID = document.getElementById("year");
yearID.innerHTML = currentYear;
document.querySelector('img').setAttribute('src', myPicture);

const favouriteFood = ['Chicken Curry','Alfredo Pasta','Spaghetti & Meatballs'];
const anotherFavouriteFood = "Pizza";
var foodID = document.getElementById("food");
foodID.innerHTML = favouriteFood;

favouriteFood.push(anotherFavouriteFood);
foodID.innerHTML = favouriteFood;

favouriteFood.shift();
foodID.innerHTML = favouriteFood;

favouriteFood.pop();
foodID.innerHTML = favouriteFood;

