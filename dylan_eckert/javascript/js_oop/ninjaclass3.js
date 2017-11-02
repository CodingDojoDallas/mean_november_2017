class Ninja {
  constructor(name, health=100, speed=3, strength=3){
    this.name=name;
    this.health=health;
    this.strength=strength;
    this.speed=speed;
  }
  sayName(){
    console.log(`My ninja name is ${this.name}!`);
    return this;
  }
  showStats(){
    console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    return this;
  }
  drinkSake(){
    this.health += 10;
    return this;
  }
}
let dylan = new Ninja("Dylan");
dylan.sayName();
dylan.showStats();
dylan.drinkSake().showStats();

class Sensei extends Ninja {
  constructor(name, health=200, speed=10, strength=10, wisdom=10){
    super(name, health, speed, strength);
    this.wisdom=wisdom;
  }
  showStats(){
    console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    return this;
  }
  speakWisdom(){
    super.drinkSake();
    console.log("What one programmer can do in one month, two programmers can do in two months.");
    return this;
  }
}

let super_sensei = new Sensei("Master Splinter");
super_sensei.speakWisdom();
super_sensei.showStats();
