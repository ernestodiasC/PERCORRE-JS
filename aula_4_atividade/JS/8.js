function f8(){
    let height=prompt("Digite sua altura em metros")
    height=Number(height.replace(",","."))
    let weight=prompt("Digite seu peso quilogramas")
    weight=Number(weight.replace(",","."))
    let imc=weight/(height**2)
    if(imc<18.5){alert(`Seu IMC(${imc}) está abaixo do saudável!`)}
    else if(imc>24.9){alert(`Seu IMC(${imc}) está acima do saudável!`)}
    else{alert(`Seu IMC(${imc}) está no intervalo saudável`)}
}