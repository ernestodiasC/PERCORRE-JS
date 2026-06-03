/*function oqEPraFzr(){
    alert("OQ É PRA FAZER?! - Ermeson \"Gelado\" Barros")
}
const toRandom=document.getElementById("randomnumbah")
function randomText(){
    if(chaos){
    let str="",i=100
    while(i>0){
        str+=String((Math.random()*1000000000000000000000).toFixed(0))
        i--
    }
    toRandom.innerHTML=str
}
}

const loop=setInterval(()=>{
    randomText()
},1)*/

let chaos=0
const chaosidx=document.getElementById("title")

function patience(){
    const idx=document.getElementById("patience")
    idx.style.color="red"
    idx.innerHTML="P#$@ PRA C4R@(#O"
}
function titlechange(){
    chaos=true
    chaosidx.innerHTML="Ola Camarada!"
}

const loop=setInterval(()=>{
    if(chaos){
        switch(chaosidx.style.color){
        default:
            chaosidx.style.color="red"
            break
        case "red":
            chaosidx.style.color="green"
            break
        case "green":
            chaosidx.style.color="blue"
            break
        case "blue":
            chaosidx.style.color="white"
            break
        case "white":
            chaosidx.style.color="black"
            break
        }
    }
},50)