window.onload = function(){
    
const cor = document.getElementById('color-palette');
let button1 = document.getElementsByClassName('um');
let button2 = document.getElementsByClassName('dois');
let button3 = document.getElementsByClassName('tres');
let button4 = document.getElementsByClassName('quatro');

function gerarCorAleatoria() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

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

function corInicial () {
let paleta = document.querySelectorAll('.um.dois.tres.quatro');
    for (let index = 0; index < paleta.length; index += 1) {
    if (window.getComputedStyle(paleta[index]).backgroundColor === 'rgb(0, 0, 0)') {
        paleta[index].classList.add('selected');

} else {
    paleta[index].classList.remove('selected');
}
}
}
document.querySelector('.um').classList.add('selected');
document.addEventListener('DOMContentLoaded', function() {
corInicial();
});

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

document.addEventListener('click', function(event) {
if (event.target.matches('.button')) {
    select(event);
    }
 });

function selectPixel (event) {
    const pixel = event.target;
    const pixels = document.querySelectorAll('.pixel');

    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].classList.remove('selectColor');
  }
  pixel.classList.add('selectedColor');
  }
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', selectPixel)
  }

document.addEventListener('click', function(event) {
if (event.target.matches('.button')) {
    selectPixel(event);
    }
 });

let colorSelec = document.querySelectorAll('.color');
let pixelSelec = document.querySelectorAll('#pixel-board .pixel');

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

}
