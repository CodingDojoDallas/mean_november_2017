function Ninja(name, health = 100, speed = 3, strength = 3){
    var speed = speed;
    var strength = strength;

    this.name = name;
    this.health = health;

    this.sayName = function() {
        console.log("My name is " + this.name);
    }

    this.showStats = function() {
        console.log("Name: " + this.name + "  Health: " + this.health + "  Speed: " + speed + "  Strength: " + strength);
    }

    this.drinkSake = function() {
        this.health += 10;
    }

    this.punch = function(target) {
        target.health -= 5;
        console.log(target.name + " was punched by " + this.name + " and lost 5 health. A little sake and he'll be fine.")
    }

    this.kick = function(target) {
        this.health -= 15;
        console.log(this.name + " was kicked by " + target.name + " and lost 15 health. He's really going to need some sake.")
    }
}

var rocky = new Ninja("Rocky");
var mistert = new Ninja("MisterT");

rocky.punch(mistert);
rocky.kick(mistert);