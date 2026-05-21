const name=prompt("Digite seu nome:")
let age=Number(prompt("Digite quantos ano fara este ano:"))
let year=new Date().getFullYear()
console.log(`Sua idade em 2060 será: ${(2060-year)+age}`)