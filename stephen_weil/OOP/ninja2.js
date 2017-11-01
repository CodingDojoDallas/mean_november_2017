function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.getSpeed = function() {
        return speed;
    };
    this.getStrength = function() {
        return strength;
    };
}

Ninja.prototype = {
    sayName: function() {
        console.log("My ninja name is", this.name);
    },
    showStats: function() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.getSpeed() + ", Strength: " + this.getStrength());
    },
    drinkSake: function() {
        this.health += 10;
        console.log(this.name + " drank some Sake and gained 10 health!");
    },
    punch: function(ninja) {
        if (ninja instanceof Ninja) {
            ninja.health -= 5;
            console.log(ninja.name + " was punched by " + this.name + " and lost 5 health.");
        }
        else {
            console.log("Ninjas may only punch other ninjas");
        }
    },
    kick: function(ninja) {
        if (ninja instanceof Ninja) {
            var lost_health = 15*this.getStrength();
            ninja.health -= lost_health;
            console.log(ninja.name + " was kicked by " + this.name + " and lost " + lost_health + " health.");
        }
        else {
            console.log("Ninjas may only kick other ninjas");
        }
    }
};

var stephen = new Ninja("Stephen");
stephen.sayName();
stephen.showStats();
stephen.drinkSake();
stephen.showStats();
var other_guy = new Ninja("Other Guy");
stephen.punch(other_guy);
other_guy.showStats();
stephen.punch([1,2,3]);
stephen.punch({'name': 'ninja'});
other_guy.kick(stephen);
stephen.showStats();
other_guy.kick("This shouldn't work");