const hNeedle = document.querySelector('.hour-needle')
const mNeedle = document.querySelector('.minute-needle')
const sNeedle = document.querySelector('.second-needle')
const dialHr = document.querySelectorAll('.dial-hr')

// console.log(dialHr)
dialHr.forEach((hr, index) => hr.style.transform = `rotate(${30 * index}deg)` )

setInterval(() => {
  const currentDate = new Date()
  const hour = currentDate.getHours()
  const minute = currentDate.getMinutes()
  const second = currentDate.getSeconds()

  hNeedle.style.transform = `rotate(${(30*hour)+(minute/2)+(second/120)}deg)`
  mNeedle.style.transform = `rotate(${(6*minute)+(second/10)}deg)`
  sNeedle.style.transform = `rotate(${6*second}deg)`
}, 1000)
/*
Hour Needle = (30H + M/2 + S/120)deg
Minute Needle = (6M)deg
Second Needle = (6S)deg
*/