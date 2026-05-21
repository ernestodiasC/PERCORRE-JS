function mulberry32(seed) {
    return function () {
      seed |= 0;
      seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
function string_binary(text){
    return text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
}
function binary_int(binary_string){
    return parseInt(binary_string, 2)
}

let sNome=prompt("Digite o nome do aluno:")
let RNG=mulberry32(binary_int(string_binary(sNome)))
let nMedia=(RNG()*10).toFixed(1)
RNG=mulberry32(binary_int(string_binary(sNome))+nMedia)
let nFaltas=(RNG()*15).toFixed(0)
if(nMedia>=7&&nFaltas<6){
    alert(`O Aluno ${sNome} foi Aprovado, M${nMedia} F${nFaltas}`)
}else{
    alert(`O Aluno ${sNome} foi Reprovado, M${nMedia} F${nFaltas}`)
}