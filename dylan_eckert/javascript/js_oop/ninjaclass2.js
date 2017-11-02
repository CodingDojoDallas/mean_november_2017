function Ninja(name, health=100){
  var speed = 3;
  var strength = 3;
  this.name = name;
  this.health = health;
  this.sayName= function(){
    console.log("My ninja name is "+this.name+"!");
    return this;
  };
  this.showStats= function(){
    console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+speed+", Strength: "+strength);
    return this;
  };
  this.drinkSake= function() {
    this.health += 10;
    return this;
  }
  this.punch= function(enemy){
    let damage= (5*strength);
    enemy.health -= damage
    console.log(enemy.name+" was punched by "+this.name+" and lost "+damage+" Health!")
    return this;
  }
  this.kick= function(enemy){
    let damage= (15*strength);
    enemy.health -= damage
    console.log(enemy.name+" was kicked by "+this.name+" and lost "+damage+" Health!")
    return this;
  }
}
var blue_ninja = new Ninja("Steve Jobs");
var red_ninja = new Ninja("Bill Gates");
red_ninja.punch(blue_ninja);
blue_ninja.kick(red_ninja);
blue_ninja.showStats();
red_ninja.showStats();
