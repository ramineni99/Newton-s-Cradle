class Bob {
    constructor(x,y,radius){
        var options = {
            'restitution':0.2,
            'friction':0.5,
            'density':1.2,
        }
        this.body = Bodies.circle(x, y,radius,options);
        this.radius = radius;
        
        World.add(world, this.body);
    }
    
    display(){
    var pos = this.body.position;
        push();
       
        ellipseMode(CENTER);
        fill("white");
        stroke("black");
        ellipse(pos.x,pos.y, this.radius,this.radius);
        pop();
    }
    
    }