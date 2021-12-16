
//linkando os elementos
let black = document.querySelector("#black");
let blue = document.querySelector("#blue");
let purple = document.querySelector("#purple");
let pink = document.querySelector("#pink");

//para mudar quando seleciona 
function change(event) {
  let changeSelection = document.querySelector(".selected");
  changeSelection.classList.remove("selected");
  event.target.classList.add("selected");
}

//configurando os cliques
// addEventListenner 
black.addEventListener("click", change);
blue.addEventListener("click", change);
purple.addEventListener("click", change);
pink.addEventListener("click", change);


