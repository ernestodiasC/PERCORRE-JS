let people=["Arroz","Yuri","Vincenzo","Gabriel F.","Slash","Hollywood","Moroni","Antonia","Almeron","Alguem","Isaac"]
people.forEach(function (v,i,a){
    console.log(`E-mail enviado para ${v} há ${a.length-i-1} calculos atrás`)
    console.log(`Turma: [${a}]`)
    console.log(`-------------------------`)
})

let fruits=["Banana","Apple","Grapes","Orange"]

fruits.forEach(function (v,i,a){
    console.log(`The ${v} is a Rank ${i}.`)
    console.log(`The ${v} is from the group of ${a}`)
    console.log(`--------------------------------`)
})