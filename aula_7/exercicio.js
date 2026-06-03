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
    console.log(`Seu IMC é ${IMC.toFixed(2)}, isto lhe qualifica como `+IMC_check(IMC))
}
IMC_test(1.81,78)

function rs_to_euro(rs){
    return rs*5.85
}
function rs_to_euro_texted(rs){
    console.log(`${rs} Reais na cotação atual é equivalente a ${rs_to_euro(rs).toFixed(2)} Euros`)
}
rs_to_euro_texted(1)
rs_to_euro_texted(10)