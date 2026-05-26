let n1=Number(prompt("Digite um número de 1 a 7."))
let txt=""
switch(n1){
default:
    if(n1){txt="Número digitado maior que 7"}
    else{txt="Número digitado menor que 1"}
    break
case 7: txt="Domingo";break
case 1: txt="Segunda";break
case 2: txt="Terça";break
case 3: txt="Quarta";break
case 4: txt="Quinta";break
case 5: txt="Sexta";break
case 6: txt="Sábado";break
}
console.log(txt)
alert(txt)