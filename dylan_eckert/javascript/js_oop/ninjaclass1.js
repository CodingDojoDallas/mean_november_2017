function Ninja(name, health=100){
  var speed = 3;
  var strength = 3;
  this.name = name;
  this.health = health;
  this.sayName = function(){
    console.log("My ninja name is "+this.name+"!");
    return this;
  };
  this.showStats = function(){
    console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+speed+", Strength: "+strength);
    return this;
  };
  this.drinkSake= function() {
    this.health += 10;
    return this;
  }
}
var ninja1 = new Ninja("Hyabusa")
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake().showStats();
