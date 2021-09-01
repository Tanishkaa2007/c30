//creating the pig class that has inherited the properties and functions from the base class
class Pig extends BaseClass {
  //creating the body
  constructor(x, y){
    super(x,y,50,50);
    //loading the image 
    this.image = loadImage("sprites/enemy.png");
    //defining the the value 255 in this.visibility to make the body appaer on the output screen
    this.Visibility = 255;
  }
  display(){
    //writing an if statement saying if the speed of the body is less than then it will be displayed
    if(this.body.speed<3){
       super.display();
    }
    else{
      //removing the body from the world if it does not agree with the if statement
      World.remove(world,this.body);
      push();
      //reducing the visibility by 5
      this.Visibility=this.Visibility-5;
      //a function used to fade the image and then make it disappear completely
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }

};