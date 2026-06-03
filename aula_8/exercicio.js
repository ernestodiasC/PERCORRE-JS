function IMC_check(i){
    if(i<=16.9){
        return "muito abaixo do peso"
    }else if(i<=18.4){
        return "abaixo do peso"
    }else if(i<=24.9){
        return "peso normal"
    }else if(i<=29.9){
        return "sobrepeso"
    }else if(i<=34.9){
        return "obesidade grau 1"
    }
    return "obesidade grau 2 ou 3"
}

function IMC_test(height,weight){
    let IMC=weight/(height**2)
    alert(`Seu IMC é ${IMC.toFixed(2)}, isto lhe qualifica como `+IMC_check(IMC))
}

function button_test(){
    let resul=IMC_test(Number(document.getElementById("height").value),Number(document.getElementById("weight").value))
}