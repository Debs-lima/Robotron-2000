const controles = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const robo = document.querySelector('[data-robo]');

const pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },

  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}
;

const coresRobo = ['img/Robotron 2000 - Branco.png', 'img/Robotron 2000 - Amarelo.png', 'img/Robotron 2000 - Azul.png', 'img/Robotron 2000 - Preto.png', 'img/Robotron 2000 - Rosa.png', 'img/Robotron 2000 - Vermelho.png'];
//const cores = ['var(--main-laranja)', 'var(--main-marrom)', 'var(--main-cinza-claro)', 'var(--main-amarelo)', 'var(--main-azul)', 'var(--main-rosa)']


robo.addEventListener("click", (evento) => {
  alteraCor(evento.target);
  //console.log(contador)

})

controles.forEach( (elemento) => {
  elemento.addEventListener ("click", (evento) => {
    aprimora(evento.target.dataset.controle, evento.target.parentNode);
    calcula(evento.target.dataset.peca);

  } )
} )

let contador = 0;
function alteraCor () {
  if(contador == coresRobo.length){
    contador = 0
  }
  robo.setAttribute('src', coresRobo[contador]);
  contador++;
}

function aprimora (operacao, controle) {
  const peca = controle.querySelector('[data-contador]');

  if (operacao === "-") {
    if (peca.value > 0) {
    peca.value = parseInt(peca.value) - 1;
    }
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

function calcula (peca) {
  //console.log(peca);
  //console.log(pecas[peca]);

  estatisticas.forEach( (elemento) => {
    //console.log(elemento.dataset.estatistica)
    //console.log(elemento.textContent)
    
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
  })
}

