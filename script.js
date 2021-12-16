
//linkando os elementos
let black = document.querySelector("#black");
let blue = document.querySelector("#blue");
let purple = document.querySelector("#purple");
let pink = document.querySelector("#pink");

black.style.backgroundColor = "black";
purple.style.backgroundColor = "purple";
blue.style.backgroundColor = "blue";
pink.style.backgroundColor = "pink";

//7. para mudar quando seleciona  
function change(event) {
  let changeSelection = document.querySelector(".selected");
  changeSelection.classList.remove("selected");
  event.target.classList.add("selected");
}

//configurando os cliques
// addEventListenner (escutador de eventos)
black.addEventListener("click", change);
blue.addEventListener("click", change);
purple.addEventListener("click", change);
pink.addEventListener("click", change);

//8. Preencher o pixel branco com a cor selecionada na paleta
function colorir(e) {
  let pintar = document.querySelector(".selected").style.backgroundColor;
  if (e.target.style.backgroundColor !== pintar) {
    e.target.style.backgroundColor = pintar;
  } else if (e.target.style.backgroundColor === pintar){
    e.target.style.backgroundColor = "white";
  }
  
}
let pixel = document.querySelectorAll(".pixel");
for (let p = 0; p < pixel.length; p +=1){
  pixel[p].addEventListener("click", colorir);
}



