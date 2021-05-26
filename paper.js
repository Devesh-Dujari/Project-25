class Paper extends Dustbin{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':0,
            'density':1.2
        }
        super(x,y,radius);	
        this.image = loadImage("paper.png");
        
      }
}
