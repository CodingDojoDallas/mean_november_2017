class Ninja {
     constructor(name){
         this.name = name;
         this.health = 100;
         this.speed = 3;
         this.strength = 3;
     }
     sayName() {
         console.log("Hi, my name is:" + this.name);
         return this;
     }
     showStats() {
         console.log(this.name + "'s stats are strength: "+ this.strength + " with speed of: "+ this.speed + " and health of: "+this.health);
         return this;
     }
     drinkSake(){
         this.health += 10;
         console.log("now your health is: "+ this.health);
         return this;
     }
 }

/*  class Sensei extends Ninja{ 
     constructor()
 } */

 shiv = new Ninja("shiv")
 shiv.drinkSake().sayName().showStats();