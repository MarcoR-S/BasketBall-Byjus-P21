class Ground{
    constructor(x,y,l,a){
        
        var corpo ={
            isStatic:true
        }
        this.body= Bodies.rectangle(x,y,l,a,corpo)
        this.largura= l;
        this.altura= a;
        World.add(world,this.body)
    }

    show(){
        var pos = this.body.position
        push()
        rectMode(CENTER)
        fill(120);
        rect(pos.x, pos.y, this.largura,this.altura)
        pop()
    }



} 