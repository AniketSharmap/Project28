class Boy {
    constructor(x, y) {
        var options =
        {
            isStatic: 'true',
            restitution: 0.8,
            density: 1,
            friction: 1
        }
        this.body = Bodies.rectangle(x, y, 120,120,options);
        this.x = x;
        this.y = y;
        this.width = 120;
        this.height = 120;
        this.image = loadImage("sketch/boy.png");
        World.add(world, this.body);
    }
    display() {
        push();
        var pos = this.body.position;
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
};