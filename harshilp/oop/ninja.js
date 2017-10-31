function Ninja (name) {
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;

    this.showStats = function () {
        console.log(`Hp: ${this.health} Spd: ${speed} Str: ${strength}`);
        return this;
    }

    this.kick = function (ninja) {
        if (ninja instanceof Ninja) {
            console.log(`${this.name} kicked ${ninja.name}`);
            ninja.health -= (strength * 15);
        }
        return this;
    }
}

Ninja.prototype.sayName = function () {
    console.log(`Ore wa ${this.name}`);
    return this;
}


Ninja.prototype.drinkSake = function () {
    this.health += 10;
    return this;
}

Ninja.prototype.punch = function(ninja) {
    if (ninja instanceof Ninja) {
        ninja.health -= 5;
        console.log(`${this.name} punched ${ninja.name}`);
    }
    return this;
}

var ninja1 = new Ninja('Hyabusa')
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake().showStats()
var ninja2 = new Ninja('Goemon')
ninja1.punch(ninja2)
ninja2.showStats()
ninja2.kick(ninja1)
ninja1.showStats()
