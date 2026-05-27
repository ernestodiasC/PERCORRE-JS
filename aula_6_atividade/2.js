function main_loop(){
    let n1=Number(prompt("Escolha um número de 1 10"))
    let n2=Math.round((Math.random()*9)+1)
    if(n1==n2){
        alert(`Parabéns! Você acertou, era ${n2}`)
        return
    }
    alert(`Puxa! Você chutou ${n1}, era ${n2} \n Tente novamente`)
    main_loop()
}
main_loop()