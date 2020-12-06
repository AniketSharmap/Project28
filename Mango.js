class Mango
{
    constructor(x,y)
    {
        var options =
        {
            isStatic: true,
            restitution : 0,
            friction : 1,
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.image = loadImage("sketch/mango.png")
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