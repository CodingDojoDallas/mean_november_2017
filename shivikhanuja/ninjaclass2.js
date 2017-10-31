function Ninja(name, health){
  var self = this;
  // By using var you create a private variable
  var speed = 3;
  var strength = 3;
  this.name = name;
  this.health = 100;

  Ninja.prototype.sayName = function(){
    console.log("My Ninja name is " + this.name + ".");
    return this;
  }
  this.showStats = function(){
    console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    return this;
  }

  Ninja.prototype.drinkSake = function(){
    this.health += 10;
    console.log("My health is now " + this.health);
  }
}
  Ninja.prototype.punch = function(ninja){
    this.health -= 5;
    console.log("Name: " + ninja.name + " was punched by "  + this.name + " and lost "  + this.health +  " health"  )  
  } 
  
  Ninja.prototype.kick = function(ninja){
    this.health -= 15;
    console.log("Name: " + ninja.name + " was kicked by "  + this.name + " and lost "  + this.health +  " health"  )  
  }  
var ninja1 = new Ninja("Charlie");
var ninja2 = new Ninja("Bill Gates");
var ninja3 = new Ninja("Geomon");

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja2.punch(ninja3);
ninja3.kick(ninja2);