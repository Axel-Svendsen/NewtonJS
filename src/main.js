
class Ball
{
    // xpos, ypos, speed (vector) , ball radius, weight
    constructor(pos,v,br,w)
    {
        this.pos = pos
        this.v = v
        this.br = br
        this.w = w

        // Ctx
        this.c = document.querySelector("#NJS-canvas");
        this.ctx = this.c.getContext("2d");
    }    
    
    draw() {
        this.ctx.beginPath();
        
        this.ctx.arc(this.pos[0] , this.pos[1], this.br, 0, Math.PI*2);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
      }
}


class NewtonJS
{
    constructor()
    {
        // Physics-Constants
        this.gravity = 0.1

        // Definitions
        this.objects = []

        // Ctx
        this.c = document.querySelector("#NJS-canvas");
        this.ctx = this.c.getContext("2d");
    }

    newball(obj)
    {
        this.objects.push(obj)
    }

    draw()
    {
        this.clear()
        this.objects.forEach((obj) => {
            obj.draw()
        })
    }

    physics()
    {
        this.objects.forEach((obj) => {
            // Gravity
            const gravity_vector = new Vector (0,obj.w * this.gravity)
            obj.v = Vector.add(gravity_vector, obj.v)
            

            // Change position
            obj.pos = Vector.add(obj.v, obj.pos)
            //console.log(obj.pos)
        })
    }


    tick()
    {
        this.physics()
        this.draw()

    }


    clear()
    {
        this.ctx.clearRect(0, 0, this.c.width, this.c.height);
    }

    

    
        
}


const can = new NewtonJS

obj = new Ball(new Vector(200,200) ,new Vector(0,0),50,1)

can.newball(obj)
can.clear()
setInterval(() => {
    can.tick()    
}, 100);


