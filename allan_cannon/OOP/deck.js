class Card{
  constructor(value,suit){
    this.value = value
    this.suit = suit
  }

  showCard(){
    var name
    const card_names = [,"Ace",,,,,,,,,,"Jack","Queen","King"]
    if(this.value > 1 && this.value < 11){
      name = this.value
    }
    else{
      name = card_names[this.value]
    }
    console.log(`${name} of ${this.suit}`)
  }
}

class Deck{
  constructor(){
    this.cards = []
    this.suits = ["Clubs","Diamonds","Hearts","Spades"]
    for(var i = 0; i<4; i++){
      for(var j=1; j<14; j++){
        this.cards.push(new Card(j,this.suits[i]))
      }
    }
  }

  showDeck(){
    for(var i=0; i < this.cards.length; i++){
      this.cards[i].showCard()
    }
    return this
  }

  shuffle() {
    for (var i = this.cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
    }
    return this
  }

  reset() {
    this.cards = []
    for(var i = 0; i<4; i++){
      for(var j=1; j<14; j++){
        this.cards.push(new Card(j,this.suits[i]))
      }
    }
    return this
  }

  deal(){
    var card_num = Math.floor(Math.random()*this.cards.length)
    var card = this.cards[card_num]
    this.cards.splice(card_num,1)
    return card
  }
}

class Player{
  constructor(name){
    this.name = name
    this.hand = []
  }

  drawCard(deck){
    this.hand.push(deck.deal())
    return this
  }

  showHand(){
    for(var i = 0; i < this.hand.length; i++){
      this.hand[i].showCard()
    }
    return this
  }

  discard(num){
    var card = this.hand[num]
    this.hand.splice(num,1)
    return card
  }
}

newDeck = new Deck()
newDeck.showDeck().shuffle().showDeck().reset().showDeck().deal().showCard()
console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
newDeck.showDeck()


console.log('*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
allan = new Player("Allan")
allan.drawCard(newDeck).drawCard(newDeck).drawCard(newDeck).drawCard(newDeck).drawCard(newDeck).drawCard(newDeck)
allan.showHand()
console.log('##################################')
allan.discard(0)
allan.showHand()
// newDeck.showDeck()

// newcard = new Card(13,"Hearts")
// newcard.showCard()
