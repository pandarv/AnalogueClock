const hNeedle = document.querySelector('.hour-base')
const mNeedle = document.querySelector('.minute-base')
const sNeedle = document.querySelector('.second-base')
const dialHr = document.querySelectorAll('.dial-hr')
const secTick = document.querySelector('.seconds-dial')
createTicks()
const secondTick = document.querySelectorAll('.second-dial')
const ticks = document.querySelectorAll('.tick')

//second ticks on dial
function createTicks() {
  for(let i=1; i <= 60; i++){
    const divTick = document.createElement('div')
    divTick.classList.add('tick')
    const secDialTick = document.createElement('div')
    secDialTick.classList.add('second-dial')
    secDialTick.appendChild(divTick)
    secTick.append(secDialTick)
  }
}

const placeInCircle = (arr, angle) => arr.forEach((element, index) => element.style.transform = `rotate(${angle * index}deg)`)

// Rotation of all red colored ticks on hrs
ticks.forEach((tick, index) => index % 5 === 0 && tick.classList.add('tick-big') )
// Rotation of all black ticks on every second
placeInCircle(secondTick, 6)

// Rotation of all the hr numbers
placeInCircle(dialHr, 30)

setInterval(() => {
  const currentDate = new Date()
  const hour = currentDate.getHours()
  const minute = currentDate.getMinutes()
  const second = currentDate.getSeconds()

  hNeedle.style.transform = `translate(-50%, -50%) rotate(${(30*hour)+(minute/2)+(second/120)}deg)`
  mNeedle.style.transform = `translate(-50%, -50%) rotate(${(6*minute)+(second/10)}deg)`
  sNeedle.style.transform = `translate(-50%, -50%) rotate(${6*second}deg)`
}, 1000)
/*
Hour Needle = (30H + M/2 + S/120)deg
Minute Needle = (6M)deg
Second Needle = (6S)deg
*/