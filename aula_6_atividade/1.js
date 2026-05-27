function main(){
let desc=0
let price=1000
switch(prompt("Informe seu código promocional")){
case "DESC1": desc=.05;break
case "DESC2": desc=.1;break
case "DESC3": desc=.15;break
case "DESC4": desc=.2;break
case "DESC5": desc=.25;break
default:
    alert(`ERRO: Código invalido inserido \n Preço sera de ${price}`)
    return
}
let fprice=price-(price*desc)
alert(`O Preço descontado foi de ${fprice} \n Enquanto o preço original é de ${price}`)
}
main()
