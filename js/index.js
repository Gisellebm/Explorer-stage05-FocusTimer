//EcmaScript - ES6 Modules
//default import - posso nomear com qq nome
import resetControls from "./controls.js"
import { Timer } from "./timer.js"
//named import - não pode colocar, tem que usar os mesmos nomes
//import { countDown, resetTimer} from "./timer.js"

// DOM - Document Object Model
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

//injeção de dependências
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls
})

buttonPlay.addEventListener('click', function(){
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  timer.countDown()
})

buttonPause.addEventListener('click', function() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function() {
  resetControls()
  timer.resetTimer()
})

buttonSoundOn.addEventListener('click', function() {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function() {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})

buttonSet.addEventListener('click', function() {
  let newMinutes = prompt('Quantos minutos?')
  if(!newMinutes) {
    timer.resetTimer()
    return
  }
  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})

//REFATORAÇÃO - mudar um código para deixá-lo + legível e perfomático
//SEM ALTERAR suas funcionalidades
//event-driven
//programação imperativa
//callback
//textContent - posso mudar o conteúdo de um elemento
//Criando objetos com o padrão Factory e injeção de dependências