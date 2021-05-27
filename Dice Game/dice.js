var randomNum1 = Math.floor( Math.random()*6) + 1;
var randomNum2 = Math.floor( Math.random()*6) + 1;

var randomImg1 = "dice" + randomNum1 + ".png";
var randomImg2 = "dice" + randomNum2 + ".png";

var randomImgSrc1 = "images/" + randomImg1;
var randomImgSrc2 = "images/" + randomImg2;

document.querySelector(".img1").setAttribute("src", randomImgSrc1);
document.querySelector(".img2").setAttribute("src", randomImgSrc2);

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
} 
else if(randomNum2>randomNum1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Its a draw, play again";
}
