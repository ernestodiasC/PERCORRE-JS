function calc(n1,n2,exec){
    switch(exec){
    case "+": return n1+n2
    case "-": return n1-n2
    case "*": case "x": return n1*n2
    case "/": return n1/n2
    case "^": return Math.pow(n1,n2)
    case "sqrt": return Math.sqrt(n1)
    case "sin": return Math.sin(n1)
    case "cos": return Math.cos(n1)
    case "imul": return Math.imul(n1,n2)
    }
}
console.log(calc(1,1,"+"))