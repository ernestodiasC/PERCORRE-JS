class Car{
    constructor(model,motor,wheel,color,oil_tier){
        this.motor=motor
        this.wheel=wheel
        this.color=color
        this.oil_tier=oil_tier
        this.gasoline_tank=1
        this.model=model
    }
    model_is(){
        console.log(this.model)
    }
    gasoline_percent(){
        return `The Current Amount of Fuel is: ${(this.gasoline_tank*100).toFixed(2)}\\100`
    }
}

let lenovo=new Car("Lenovo","V8","Rubber","Gray",4)
lenovo.model_is()
let positivo=new Car("Positivo","V4","Plastic","Black",5)
console.log(positivo.gasoline_percent())