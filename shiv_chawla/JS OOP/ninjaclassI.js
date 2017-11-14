function NinjaConstructor(name){
    //these are the attributes
    this.name = name;
    this.health = 100;
    var speed = 3; //MATT, these are private variables to the instance?
    var strength = 3;
    //now these are the functions (methods) attached to the instance so every instance will have these functions
    this.showStats = function(){
        console.log("your speed is: " + speed);
        console.log("your strength is: " + strength);
        console.loog("your health is: " + this.health);
    }
}
//every instance will have these BUT, it'll point to the prototype?
NinjaConstructor.prototype.drinkSake = function(){
    this.health += 100;
    console.log("you now have this much health:" + this.health);
    return this; //MATT, can you explain why this works? What is this that is being returned? The instance?
}

NinjaConstructor.prototype.sayName = function(){
    console.log("hello, I am " + this.name);
    return this;
}

var ninja1 = new NinjaConstructor("Shiv");
var ninja2 = new NinjaConstructor("Donald")
ninja1.sayName();
ninja1.drinkSake();
ninja1.punch(ninja2);
ninja2.showStats();