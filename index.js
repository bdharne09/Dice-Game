var randomNumber1 = Math.random();

randomNumber1 = (randomNumber1 * 6) + 1;

randomNumber1 = Math.floor(randomNumber1);

console.log(randomNumber1);

var img1Str = "dice" + randomNumber1 + ".png";

document.getElementsByClassName("img1")[0].setAttribute("src", img1Str);

var randomNumber2 = Math.random();

randomNumber2 = (randomNumber2 * 6) + 1;

randomNumber2 = Math.floor(randomNumber2);

console.log(randomNumber2);

var img2Str = "dice" + randomNumber2 + ".png";

document.getElementsByClassName("img2")[0].setAttribute("src", img2Str);

if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins!!";

}
else if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").innerHTML = "player 1 wins!!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!!";
}
