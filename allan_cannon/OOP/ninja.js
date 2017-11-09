class Ninja {
  constructor(name,health = 100,speed = 3, strength = 3){
    this.name = name
    this.health = health
    this.speed = speed
    this.strength = strength
  }

  sayName(){
    console.log(`My ninja name is ${this.name}`)
    return this
  }

  showStats(){
    console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
    return this
  }

  drinkSake(){
    this.health+=10
    return this
  }
}

class Sensei extends Ninja{
  constructor(name,health = 200,speed = 10, strength = 10, wisdom = 10){
    super(name,health,speed,strength)
    this.wisdom = wisdom
  }

  speakWisdom(){
    super.drinkSake()
    console.log(`Javascript sucks.`)
    return this
  }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
ninja1.drinkSake().showStats()

var sensei1 = new Sensei("Matt")

sensei1.speakWisdom().showStats()
