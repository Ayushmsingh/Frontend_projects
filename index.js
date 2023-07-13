var number = Math.floor(Math.random()*6)+1;

var image = "dice" + number + ".png";

var photo = "images/" + image;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , photo);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var image2 = "dice" + randomNumber2 + ".png";

var randomImage2 = "images/" + image2;

var photo2 = document.querySelectorAll("img")[1];

photo2.setAttribute("src",randomImage2);

if(number>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber2>number){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "it's a tie";
}