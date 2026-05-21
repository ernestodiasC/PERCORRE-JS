const didOne_One=document.getElementById("1_1r")

function f1_1(){
    let nValue1=Math.round(Math.random()*10)
    let nValue2=Math.round(Math.random()*10)
    alert(nValue1+nValue2)
    didOne_One.textContent=nValue1+nValue2
}