const hNeedle = document.querySelector('.hour-base')
const mNeedle = document.querySelector('.minute-base')
const sNeedle = document.querySelector('.second-base')
const dialHr = document.querySelectorAll('.dial-hr')
const secTick = document.querySelector('.seconds-dial')

//second ticks on dial

// secTick.innerHTML = `<div class="second-dial"><div class="tick"></div></div>`
for(let i=1; i <= 60; i++){
  const divTick = document.createElement('div')
  divTick.className = 'tick'
  const secDialTick = document.createElement('div')
  secDialTick.className = 'second-dial'
  secDialTick.appendChild(divTick)
  secTick.append(secDialTick)
}

const secondTick = document.querySelectorAll('.second-dial')

console.log(secTick)
console.log(secondTick)
secondTick.forEach((dial, index) => dial.style.transform = `rotate(${6 * index}deg)`)

// Rotation of all the hr numbers
dialHr.forEach((hr, index) => hr.style.transform = `rotate(${30 * index}deg)` )

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