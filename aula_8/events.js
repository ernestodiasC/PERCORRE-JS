function oqEPraFzr(){
    alert("OQ É PRA FAZER?! - Ermeson \"Gelado\" Barros")
}
const toRandom=document.getElementById("randomnumbah")
function randomText(){
    toRandom.innerHTML=(Math.random()*1000000000000000000000).toFixed(0)
}

const loop=setInterval(()=>{
    randomText()
},1)