function fInt_to_hex(int){
    return Math.round(int).toString(16)
}
function fGet_random_hex_color(){
    return `#${fInt_to_hex(Math.random()*256)}${fInt_to_hex(Math.random()*256)}${fInt_to_hex(Math.random()*256)}`
}

const eTitle=document.getElementById("title")

const eN1=document.getElementById("n1")
const eN2=document.getElementById("n2")
const eResult=document.getElementById("avg")
let bResult_chaos=false

function fOC_calc_avg(){
    if(!bResult_chaos){
        const loop50=setInterval(()=>{
            eResult.style.color=fGet_random_hex_color()
            eN1.style.color=fGet_random_hex_color()
            eN2.style.color=fGet_random_hex_color()
        },50)
    }
    eResult.style.fontSize="30px"
    bResult_chaos=true
    eResult.innerText=`SUA MÉDIA É: ${((Number(eN1.value)+Number(eN2.value))/2).toFixed(2)}`
}

const loop250=setInterval(()=>{
    eTitle.style.color=fGet_random_hex_color()
},250)