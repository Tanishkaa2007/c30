//creating the slingshot class
class SlingShot{
    //creating the body
    constructor(bodyA, pointB){
        //defining the properties to be given to the constraint
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //loading the images
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        //creating the body which will utilise the properties defined in the "options"
        this.sling = Constraint.create(options);
        //adding it to the world
        World.add(world, this.sling);
    }
    //the function to realease the body from the constraint 
    fly(){
        //null means empty
        this.sling.bodyA = null;
    }

    display(){
        //displaying the images
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        //writing the if statement to display the constraint from the x and y coordinates of the body and the point stored in pointA and pointB respectively
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            //if statement stating that if the x position of the bird is less than 220 then the width of the line will be thicker
            if(pointA.x < 220) {
                strokeWeight(7);
                //creating the two lines for the catapult
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                //loading the image for the base of the catapult
                image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                //here if the body's position does not agree with the if condition then the else condition will be followed
                strokeWeight(3);
                //creating the two lines for the catapult
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    //writing the function for reattaching the bird body to the sling
    attach(tanishkaa){
          this.sling.bodyA=tanishkaa;
    }
    
}