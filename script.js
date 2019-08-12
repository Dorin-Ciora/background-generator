var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("random");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value;
    css.textContent = body.style.background + ";"
}

function colorMatch() {
    color1.value = "#ff0000";
    color2.value = "#ffff00";
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value;
    css.textContent = body.style.background + ";"

}

function randomColors1() {
     var fNum =  Math.floor(Math.random()* 255 );
     var sNum = Math.floor(Math.random()* 255 );
     var tNum = Math.floor(Math.random()* 255 );
     color1.value = "rgb("+fNum +", "+sNum +", "+tNum +")";
     body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value;
     css.textContent = body.style.background + ";"
     console.log(body.style.background);
}

function randomColors2() {
    var fNum =  Math.floor(Math.random()* 255 );
    var sNum = Math.floor(Math.random()* 255 );
    var tNum = Math.floor(Math.random()* 255 );
    color2.value = "rgb("+fNum +", "+sNum +", "+tNum +")";
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value;
    css.textContent = body.style.background + ";"
    console.log(body.style.background);
}

colorMatch();

random.addEventListener("click", randomColors1, randomColors2);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);