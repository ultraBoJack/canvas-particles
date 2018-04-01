export function getRandomIntClusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getRandom1() {
  let ran = Math.random() > 0.5 ? 1 : -1 
  return ran
}