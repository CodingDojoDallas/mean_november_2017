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
}

var rocky = new Ninja("Rocky");
rocky.sayName()
rocky.showStats()
