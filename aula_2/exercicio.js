let notas=[
    9,
    7,
    10,
]
let falta=2
let nome="Ernesto"


let media=0
for(let i=0;i<notas.length;i++){
    media+=notas[i]
}
media/=notas.length


console.log((media>7&&falta<5))