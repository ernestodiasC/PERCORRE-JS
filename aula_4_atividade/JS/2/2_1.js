const T1r=document.getElementById("2_1r")
const T2r=document.getElementById("2_2r")
const T3r=document.getElementById("2_3r")
const T4r=document.getElementById("2_4r")
function f2_1(){
    let name=prompt("Qual o seu nome?")
    let age=prompt("E sua idade?")
    let location=prompt("Bairro?")
    let name2=name.toUpperCase()
    T1r.textContent=name
    T2r.textContent=age
    T3r.textContent=location
    T4r.textContent=name2
}