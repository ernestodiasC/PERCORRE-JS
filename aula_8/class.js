let G={
    Perks:[],
    PLR:{
        speed:1
    }
}
function calc(context){
    for(let i=0;i<G.Perks.length;i++){
        let p=G.Perks[i]
        if("plr_speed" in p){
            p.plr_speed()
        }
    }
}
class Perk{
    constructor(name,type,image,weigth){
        this.name=name
        this.type=type
        this.image=image
        this.id=G.Perks.length
        G.Perks.push(this)
        this.weigth=weigth
    }
    debug_info(){
        console.log(this.name)
        console.log(this.id)
        return this
    }
}
class Good_Perk extends Perk{
    constructor(name,image,weigth){
        super(name,"good",image,weigth)
    }
}
class Bad_Perk extends Perk{
    constructor(name,image,weigth){
        super(name,"bad",image,weigth)
    }
}
class Enemy_Perk extends Perk{
    constructor(name,image,weigth){
        super(name,"enemy",image,weigth)
    }
}
let pSturdyBoots=new Good_Perk("Sturdy Boots","sturdy_boots.png",1)
pSturdyBoots.plr_speed=function(){
    G.PLR.speed+=.15
}

let pTimeEater=new Bad_Perk("Time Eater","time_eater.png",1)
let pJForked=new Enemy_Perk("J. Forked","forked.png",.75)

calc("plr_speed")
console.log(G.PLR.speed)
