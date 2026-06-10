let people=[12,15,32,666,92,17,18,19,21]

let voting_people=people.filter(function(age){
    return age>17
})
console.log(voting_people)

people=["Arroz","Alguem","Ernesto","João","Isaac","Vincenzo","Yuri"]

let biggerName=people.map(function(names){
    return names.toUpperCase()
})
console.log(biggerName)