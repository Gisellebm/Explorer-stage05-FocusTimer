//destructure
export function Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls
}) {
  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }
  //vai buscar a variável minutes no escopo global
  //e não nas outras funções
  function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countDown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      updateTimerDisplay(minutes, 0)

      if (minutes <= 0) {
        resetControls()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateTimerDisplay(minutes, String(seconds - 1))

      countDown()
    }, 1000)
  }

  return { countDown, resetTimer }
}

//named export
//export { countDown, resetTimer }
