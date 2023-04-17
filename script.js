const cor = document.getElementById('color-palette');
let button2 = document.querySelectorAll('.dois');
let button3 = document.getElementsByClassName('color tres');
let button4 = document.getElementsByClassName('color quatro');

function gerarCorAleatoria() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function corAleatoria () {
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
    for (let index = 0; index < button2.length; index += 1) {
        button2[index].style.backgroundColor = coresSalvas[index];
    }

    for (let index = 0; index < button3.length; index += 1) {
        button3[index].style.backgroundColor = coresSalvas[index + button2.length];
    }

    for (let index = 0; index < button4.length; index += 1) {
        button4[index].style.backgroundColor = coresSalvas[index + button2.length + button3.length];
    }
}


const button = document.querySelector('#button-random-color');
button.addEventListener('click', corAleatoria);

function cookieColor () {
const capturaCores = document.querySelectorAll('.dois, .color.tres, .color.quatro');
let cores = [];
for (let index = 0; index < capturaCores.length; index += 1) {
    cores.push(capturaCores[index].style.backgroundColor);
}
    return cores;
}

