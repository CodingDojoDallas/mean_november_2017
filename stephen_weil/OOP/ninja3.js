class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.strength = 3;
        this.speed = 3;
    }
    sayName() {
        console.log("My ninja name is", this.name);
    }
    showStats() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
    }
    drinkSake() {
        this.health += 10;
        console.log(this.name + " drank some sake and gained 10 health!");
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("The Zen philosopher, Basho, once wrote, 'A flute with no holes, is not a flute. A donut with no hole, is a Danish'.");
    }
}

const stephen = new Ninja("Stephen");
stephen.sayName();
stephen.drinkSake();
stephen.showStats();

const wise_man = new Sensei("Wise Old Man");
wise_man.speakWisdom();
wise_man.showStats();