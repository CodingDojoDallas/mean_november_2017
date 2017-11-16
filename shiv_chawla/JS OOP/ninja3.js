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

class Sensei extends Ninja{ 
     constructor(name){
        super(name); //so if we were passing 2 things in, we'd super multiple things?
        this.health = 200;
        this.speed = 10;
        this.wisdom = 10; //new attribute for JUST sensei
        this.strength = 10;
     }
     speakWisdom(){
         super.drinkSake(); //so this calls the ENTIRE function of "drinksake" from above 
         console.log("something wise");//this adds new shit to it
     }
     showStats() {//because we did NOT call super here, does this REPLACE the showstats function of the ninja?
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
    }
 } 

 shiv = new Ninja("shiv")
 shiv.drinkSake().sayName().showStats();
 const superSensei = new Sensei("Master Splinter");
 superSensei.speakWisdom();
 superSensei.showStats();