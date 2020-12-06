class Tree {

    constructor(x, y) {
        var options =
        {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 200, 400, options);
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 400;
        this.image = loadImage("sketch/tree.png")
        World.add(world, this.body);
    }

    display() 
    {
        push();
        var pos = this.body.position;
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }

};