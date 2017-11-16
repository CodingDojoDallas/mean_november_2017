class Ninja {
    constructor (name) {
        this.name = name;
        this.speed = 3;
        this.strength = 3;
        this.health = 100;
    }

    sayName() {
        console.log(`Ore wa ${this.name}.`);
        return this;
    }

    showStats() {
        console.log(`Hp: ${this.health} Spd: ${this.speed} Str: ${this.strength}`);
        return this;        
    }

    drinkSake() {
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja {
    constructor (name) {
        super(name);
        this.speed = 10;
        this.strength = 10;
        this.health = 200;
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log('Existence is mysterious. Life is more than a series of ones and zeros.');
        return this;
    }
}

var ninja1 = new Ninja('Hyabusa')
let super_sensei = new Sensei('Koro Sensei')
ninja1.sayName()
ninja1.drinkSake().showStats()
super_sensei.sayName().speakWisdom().showStats()