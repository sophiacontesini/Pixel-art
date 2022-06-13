// linkando os elementos
const black = document.querySelector('#black');
const blue = document.querySelector('#blue');
const purple = document.querySelector('#purple');
const pink = document.querySelector('#pink');

black.style.backgroundColor = 'black';
purple.style.backgroundColor = 'rgba(104, 38, 104, 0.871)';
blue.style.backgroundColor = 'cadetblue';
pink.style.backgroundColor = 'pink';

// 7. para mudar quando seleciona
function change(event) {
  const changeSelection = document.querySelector('.selected');
  changeSelection.classList.remove('selected');
  event.target.classList.add('selected');
}

// configurando os cliques
// addEventListenner (escutador de eventos)
black.addEventListener('click', change);
purple.addEventListener('click', change);
pink.addEventListener('click', change);

// 8. Preencher o pixel branco com a cor selecionada na paleta
// Recebi ajuda da Débora Serra - Turma 19/Tribo B
function colorir(e) {
  const pintar = document.querySelector('.selected').style.backgroundColor;
  if (e.target.style.backgroundColor !== pintar) {
    e.target.style.backgroundColor = pintar;
  } else if (e.target.style.backgroundColor === pintar) {
    e.target.style.backgroundColor = 'white';
  }
}
const pixel = document.querySelectorAll('.pixel');
for (let p = 0; p < pixel.length; p += 1) {
  pixel[p].addEventListener('click', colorir);
}

// 9. Botão Limpar
// Recebi ajuda da Débora Serra - Turma 19/Tribo B
const botaoLimpar = document.getElementById('clear-board');
function limpar() {
  const limp = document.querySelectorAll('.pixel');
  for (let i = 0; i < limp.length; i += 1) {
    limp[i].style.backgroundColor = 'white';
  }
}
botaoLimpar.addEventListener('click', limpar);
