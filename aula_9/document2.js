const title=document.getElementById("title")
/*title.style.backgroundColor="#F0F0F0"*/

function int_to_hex(int){
    return Math.round(int).toString(16)
}

const ePs=document.getElementsByTagName("p")
for(let i=0;i<ePs.length;i++){
    let ITH=int_to_hex(i*100)
    console.log(ITH)
    ePs[i].style.color=`#${ITH}${ITH}${ITH}`
}

const eBLUs=document.getElementsByClassName("BLU")
for(let i=0;i<eBLUs.length;i++){
    eBLUs[i].style.color=`#0000FF`
}

const loop=setInterval(()=>{
    title.style.color=`#${int_to_hex(Math.random()*256)}${int_to_hex(Math.random()*256)}${int_to_hex(Math.random()*256)}`
},250)