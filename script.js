

const cor = document.querySelectorAll('.um, .dois, .tres, .quatro');
let button1 = document.getElementsByClassName('um');
let button2 = document.getElementsByClassName('dois');
let button3 = document.getElementsByClassName('tres');
let button4 = document.getElementsByClassName('quatro');

function geraCorInicial() {
    const pixels = document.querySelectorAll('.um, .dois, .tres, .quatro');

    for (let index = 0; index < pixels.length; index += 1) {
        const pixel = pixels[index];
        const corAtual = window.getComputedStyle(pixel).getPropertyValue('background-color');
    if (corAtual === 'rgb(0, 0, 0)') {
        pixel.style.backgroundColor = 'rgb(0, 0, 0)';
    }
    if (corAtual === 'rgb(255, 0, 0)') {
        pixel.style.backgroundColor = 'rgb(255, 0, 0)';
    }
    if (corAtual === 'rgb(0, 255, 0)') {
        pixel.style.backgroundColor = 'rgb(0, 255, 0)';
    }
    if (corAtual === 'rgb(0, 0, 255)') {
        pixel.style.backgroundColor = 'rgb(0, 0, 255)';
}
    }
}
geraCorInicial();


function gerarCorAleatoria() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}
// Requisito 4 (Adicione um botão para gerar cores aleatórias para a paleta de cores)
function corAleatoria () {
    for (let index = 0; index < button1.length; index += 1) {
    if (button1[index].style.backgroundColor !== 'rgb(0, 0, 0)') {
    button1[index].style.backgroundColor = 'rgb(0, 0, 0)';
    } else {
    button1[index].style.backgroundColor = 'rgb(0, 0, 0)';
    }
}

    for (let index = 0; index < button2.length; index += 1) {
    if (button2[index].style.backgroundColor !== 'rgb(0, 0, 0)') {
    button2[index].style.backgroundColor = gerarCorAleatoria();
    } else {
    button2[index].style.backgroundColor = 'rgb(0, 0, 0)';
    }
}

for (let index = 0; index < button3.length; index += 1) {
    if (button3[index].style.backgroundColor !== 'rgb(0, 0, 0)') {
    button3[index].style.backgroundColor = gerarCorAleatoria();
    } else {
    button3[index].style.backgroundColor = 'rgb(0, 0, 0)';
    }
}

for (let index = 0; index < button4.length; index += 1) {
    if (button4[index].style.backgroundColor !== 'rgb(0, 0, 0)') {
    button4[index].style.backgroundColor = gerarCorAleatoria();
    } else {
    button4[index].style.backgroundColor = 'rgb(0, 0, 0)';
    }
}
cores = cookieColor();
// Requisito 5 ( Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página)
localStorage.setItem('colorPalette', JSON.stringify(cores));
let recoveryStorage = JSON.parse(localStorage.getItem('colorPalette'));
console.log(recoveryStorage);
}

const coresSalvas = JSON.parse(localStorage.getItem('colorPalette'));

if (coresSalvas) {
    for (let index = 0; index < button1.length; index += 1) {
        button1[index].style.backgroundColor = coresSalvas[index];
    }
    for (let index = 0; index < button2.length; index += 1) {
        button2[index].style.backgroundColor = coresSalvas[index + button2.length];
    }

    for (let index = 0; index < button3.length; index += 1) {
        button3[index].style.backgroundColor = coresSalvas[index + button2.length + button3.length];
    }

    for (let index = 0; index < button4.length; index += 1) {
        button4[index].style.backgroundColor = coresSalvas[index + button2.length + button3.length + button4.length];
    }
}

const button = document.querySelector('#button-random-color');
button.addEventListener('click', corAleatoria);

function cookieColor () {
const capturaCores = document.querySelectorAll('.um, .dois, .tres, .quatro');
let cores = [];
for (let index = 0; index < capturaCores.length; index += 1) {
    cores.push(capturaCores[index].style.backgroundColor);
}
    return cores;
}
// Requisito 6 (Adicione à página um quadro contendo 25 pixels)
let pixelBoard = document.getElementById('pixel-board');
for (let index = 0; index < 25; index++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);
}

function corInicial () {
let paleta = document.querySelectorAll('.um.dois.tres.quatro');
    for (let index = 0; index < paleta.length; index += 1) {
    if (window.getComputedStyle(paleta[index]).backgroundColor !== 'rgb(0, 0, 0)') {
        paleta[index].classList.add('selected');

} else {
    paleta[index].classList.remove('selected');
}
}
}
// Requisito 8 (Defina a cor preta como cor inicial da paleta de cores)
document.querySelector('.um').classList.add('selected');
document.addEventListener('DOMContentLoaded', function() {
    geraCorInicial();
    corInicial();
});
// Requisito 9 (Crie uma função para selecionar uma cor na paleta de cores)
function select (event) {
    const botao = event.target;
    const botoes = document.querySelectorAll('.um, .dois, .tres, .quatro');

    for (let index = 0; index < botoes.length; index += 1) {
        botoes[index].classList.remove('selected');
  }
  botao.classList.add('selected');
  }
    const botoes = document.querySelectorAll('.um, .dois, .tres, .quatro');
    for (let index = 0; index < botoes.length; index += 1) {
  botoes[index].addEventListener('click', select)
  }
  window.onload = function(){
// Requisito 10 (Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores)
function selectPixel (event) {
    const pixel = event.target;
    const pixels = document.querySelectorAll('.pixel');

    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].classList.remove('selectColor');
  }
  pixel.classList.add('selectedColor');
// Requisito 12 (Crie uma função para salvar e recuperar o seu desenho atual no localStorage)  
    const pixelz = cookiePixel();
    if (!pixelz.includes(pixel.style.backgroundColor)) {
        pixelz.push(pixel.style.backgroundColor);
    }
    if (pixel !== pixels[pixels.length -1] && !pixelz.includes(pixel.style.backgroundColor)) {
        pixelz.push(pixel.style.backgroundColor);
    }
        localStorage.setItem('pixelBoard', JSON.stringify(pixelz));
    }

    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', selectPixel);
    }
  
  const pixelSalvo = JSON.parse(localStorage.getItem('pixelBoard'));
  if (pixelSalvo) {
      for (let index = 0; index < pixels.length; index += 1) {
          pixels[index].style.backgroundColor = pixelSalvo[index];
      }
  }

document.addEventListener('click', function(event) {
if (event.target.matches('.button')) {
    selectPixel(event);
    } else if (event.target.matches('.pixel')) {
    selectPixel(event);
    }
 });
}
 function cookiePixel () {
    const capturaPixel = document.querySelectorAll('.pixel');
    let pixelz = [];
    for (let index = 0; index < capturaPixel.length; index += 1) {
        pixelz.push(capturaPixel[index].style.backgroundColor);
    }
        return pixelz;
    }

let colorSelec = document.querySelectorAll('.color');
let pixelSelec = document.querySelectorAll('.pixel');

function pickColor(event) {
    let selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

function colorPixel(event) {
    let selectedColor = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = selectedColor;
}

for (let index = 0; index < colorSelec.length; index += 1) {
  colorSelec[index].addEventListener('click', pickColor);
}

for (let index = 0; index < pixelSelec.length; index += 1) {
  pixelSelec[index].addEventListener('click', colorPixel);
}
// Requisito 11 (Crie um botão que retorne a cor do quadro para a cor inicial)
function pixelWhite() {
    let pixel = document.querySelectorAll('.pixel');
         for (let index = 0; index < pixel.length; index += 1) {
            pixel[index].style.backgroundColor = 'rgb(255, 255, 255)';
}
}

const clear = document.querySelector('#clear-board');
clear.addEventListener('click', function() {
pixelWhite();
});

// Requisito 13 (Crie um input que permita à pessoa usuária preencher um novo tamanho para o quadro de pixels)
let boardSize = document.querySelector('#board-size');
function pixelInicial() {
    const saveBoardSize = localStorage.getItem('boardSize');
    if (saveBoardSize) {
        boardSize.value = recupBoardSize;
    } else {
    boardSize.value = 5;
    }
   changeSize();
}

function recupBoardSize() {
    let size = localStorage.getItem('boardSize');
    if (size) {
        boardSize.value = size;
        changeSize();
    } else {
        pixelInicial();
    }
    }

document.addEventListener('DOMContentLoaded', recupBoardSize);

let buttonSize = document.getElementById('generate-board');
buttonSize.addEventListener('click', changeSize);

function changeSize() {
    let boardValor = boardSize.value;
    if (boardValor === '') {
        alert('Board inválido!');
        return;
    }

    boardValor = limitSquare(boardValor);

    localStorage.setItem('boardSize', boardValor);

    pixelBoard.innerHTML = '';
for (let index = 0; index < boardValor * boardValor; index++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);
    pixel.addEventListener('click', paintPixel);
}
ajustaPixel(boardValor);
}

function ajustaPixel(boardValor) {
    pixelBoard.style.gridTemplateColumns = `repeat(${boardValor}, 1fr)`;
    pixelBoard.style.gridTemplateRows = `repeat(${boardValor}, 1fr)`;
    pixelBoard.style.gridAutoRows = `calc(100% / ${boardValor})`;
}

function paintPixel() {
    let corSelecionada = document.querySelector('.selected').style.backgroundColor;
    this.style.backgroundColor = corSelecionada;
}
// Requisito 14 (Crie uma função que limite o tamanho mínimo e máximo do quadro de pixels)
function limitSquare(size) {
    const minSize = 5;
    const maxSize = 50;
    if (size < minSize) {
        size = minSize;
    } else if (size > maxSize) {
        size = maxSize;
}
return size;
}

const takeSize = document.querySelector('#board-size');
const pixelSize = parseInt(takeSize.value);
const sizePixel = limitSquare(pixelSize);
