var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("random");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value;
    css.textContent = body.style.background + ";"
}

function initialBackgroundColor() {
    color1.value = "#ff0000";
    color2.value = "#ffff00";
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value;
    css.textContent = body.style.background + ";"

}
 
/* Catalin Vasile 
 * 
 * https://stackoverflow.com/questions/1484506/random-color-generator
 * Am adaptat primul raspuns de pe stackoverflow de a produce o culoare de tipul '#RRBBGG'
 * Am refactorizat functiile tale randomColors12() care faceau acelasi lucru pentru 2 elemente diferite (COD DUPLICAT)
 * in asa fel incat acum ai o singura functie care e apelata de doua ori iar ca parametru de intrare folosesti
 * elementul caruia vrei sa ii schimbi culoarea (o data la color1, o data la color2, o singura functie, 2 apeluri)
 */
function setElementRandomColor(elID) {
    elID.value = getRandomColor();
}

/* 
 * Produce si returneaza o culoare aleatorie de tipul '#RRBBGG'
 */
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/*
 * Seteaza stilul 'background' al elementului cu valorile generate/initiate ale color1 si color2
 */
function setElementBackgroundColor(elID) {
    elID.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value;
    css.textContent = body.style.background + ";"
    console.log("DEBUG - " + body.style.background);
}

/*
 * Am modificat felul in care apelez 2 functii in momentul in care apas un buton
 */
btn.addEventListener("click", function(){
    setElementRandomColor(color1);
    setElementRandomColor(color2);
    setElementBackgroundColor(body);
});

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

initialBackgroundColor();