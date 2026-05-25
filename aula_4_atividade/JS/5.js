// OBS: eu não queria fazer usando if else mas sim "return false" mas fazer o que né?
function f5(){
    let age=Number(prompt("Qual sua idade?"))
    if(age>60){
        alert("Ola Idoso!")
    }else if(age<=18){
        alert("Ola Creonça!") 
    }else
        alert("Ola Adulto")
}