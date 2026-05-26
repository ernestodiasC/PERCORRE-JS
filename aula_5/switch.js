let n1=Math.round(Math.random()*3)
switch(n1){
case 0:
    n1++
    break
case 1:
    n1--
    break
case 2:
    n1*=2
    break
case 3:
    n1=-n1
    break
}
console.log(n1)