function NinjaConstructor(name){
    //these are the attributes
    this.name = name;
    this.health = 100;
    var speed = 3; //Example matt gave was that if you're playing a game and you're fighting the ninja, if it's PRIVATE to the instance, then you can't cheat and change their stats on your character
    var strength = 3;
    //now these are the functions (methods) attached to the instance so every instance will have these functions
    this.showStats = function(){
        console.log("your speed is: " + speed);
        console.log("your strength is: " + strength);
        console.log("your health is: " + this.health);
    }
    this.punch = function(ninja){
        if (ninja instanceof NinjaConstructor){
            ninja.health -= 5;
            console.log(this.name + " just punched " + ninja.name);
        }
        else{
            console.log("You should only punch other ninjas")
        }
    }
    this.kick = function(ninja){
        if (ninja instanceof NinjaConstructor){
            ninja.health -= 10;
            console.log(this.name + " just kiceked " + ninja.name);
        }
        else{
            console.log("You should only kick other ninjas")
        }
    }
    var batter = function(){
        console.log("Boom boom");//if you put THIS in a private method, it is the FUNCTION that is calling it
    }
    this.fire = function(){
        batter();
        console.log('fired missiles!')
    }
}
//every instance will have these BUT, it'll point to the prototype?
NinjaConstructor.prototype.drinkSake = function(){
    this.health += 100;
    console.log("you now have this much health:" + this.health);
    return this; //Think of this like how in python when you remember "self" so that we can chain shit together
}

NinjaConstructor.prototype.sayName = function(){
    console.log("hello, I am " + this.name);
    return this;
}
var ninja1 = new NinjaConstructor("Shiv");
var ninja2 = new NinjaConstructor("Donald");
var fakeninja = "cheese";
ninja1.sayName();
ninja1.drinkSake();
ninja1.punch(fakeninja);
ninja1.kick(ninja2);
ninja2.showStats();
ninja1.fire();