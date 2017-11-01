class Ninja {
    constructor(name, health=100, speed=3, strength=3) {
        this.speed = speed;
        this.strength = strength;
        this.name = name;
        this.health = health;
    }

    sayName() {
        console.log("My name is " + this.name +".");
    } 

    showStats() {
        console.log("Name: " + this.name + "  Health: " + this.health + "  Speed: " + this.speed + "  Strength: " + this.strength);
    }

    drinkSake() {
        this.health += 10;
    }
}


class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("The American Dream - so named because one must be asleep to believe it.")
        super.showStats();
    }
}

sensei = new Sensei("Matt");
sensei.speakWisdom();