let values=[
    1,
    2,
    3,
]

let avg=0
for(let i=0;i<values.length;i++){
    avg+=values[i]
}
avg=Math.floor(avg/values.length*1000)/1000

console.log(avg);