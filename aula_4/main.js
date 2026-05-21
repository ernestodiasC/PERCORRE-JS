function random_string(sReceive,iteratorFunction){
    if(!iteratorFunction){iteratorFunction=function(sReceive,i,ci){return ci}}
    sReceive=sReceive.split('')
    sReceive.sort(() => Math.random() - 0.5)
    let sResult=""
    for(let i=0;i<sReceive.length;i++){
        sResult+=iteratorFunction(sReceive,i,sReceive[i])
    }
    return sResult
}
alert(`Seu novo nome é: ${
    random_string(
        prompt('Qual Seu Nome?'),
        function(sReceive,i,ci){
            if(i==0){return ci.toUpperCase()}
            else if(sReceive[i-1]==" "){return ci.toUpperCase()}
            return ci.toLowerCase()
        }
    )
}`)