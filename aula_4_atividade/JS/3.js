const Tr1r=document.getElementById("3_1r")
const Tr2r=document.getElementById("3_2r")
function f3(){
    let name=prompt("Qual o seu nome completo?")
    let sepname=name.split(" ")
    Tr1r.textContent=name
    Tr2r.textContent=name.replace(sepname[1],sepname[2])
}