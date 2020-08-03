class Rope {

    constructor(Body1,Body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY

        var options = {
            bodyA: Body1,
            bodyB: Body2,
            pointB:{x:this.offsetX,y:this.offsetY},
           
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    
    }
    display() {
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
    var anchorX1 = pointA.x;
    var anchorY1 = pointA.y;
    var anchorX2 = pointB.x + this.offsetX;
    var anchorY2 = pointB.y+this.offsetY;

    push();
    strokeWeight(4);
    line(anchorX1,anchorX2,anchorY1,anchorY2);
    pop();
    }
    }