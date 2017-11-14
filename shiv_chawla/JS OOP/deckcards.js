class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
  showCard() {
    console.log(`[${this.suit},${this.value}]`)
    return this
  }
}
// card1 = new Card(1, 4)
// card1.showCard();
class Deck {
  constructor() {
    this.deck = [];
    this.buildDeck().shuffleDeck();
  }
  buildDeck() {
    for (var s = 1; s < 5; s++) {
      var suit = s;
      if (suit == 1){
        suit = "hearts"
      }
      if (suit == 2){
        suit = "spades"
      }
      if (suit == 3){
        suit = "diamonds"
      }
      else{
        suit = "clubs"
      }
      for (var v = 1; v < 14; v++) {
        var value = v;
        if (value == 11 || value == 12 || value == 13){ //for BJ only
          value = 10;
        }
        let newCard = new Card(suit, value);
        this.deck.push(newCard);
      }
    }
    return this;
  }
  showDeck() {
    for (let c = 0; c < this.deck.length; c++) {
      this.deck[c].showCard();
    }
    return this;
  }
  shuffleDeck() {
    var m = this.deck.length,
      t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = this.deck[m];
      this.deck[m] = this.deck[i];
      this.deck[i] = t;
    }
    return this;
  }
  dealCard(){
    return this.deck.pop();
  }
  resetDeck(){
    this.deck.splice(0, this.deck.length);
    this.buildDeck();
    return this;
  }
}
class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }
  draw(deck){
    this.hand.push(deck.dealCard());
    return this;
  }
  discard(){
    this.hand.pop();
    return this
  }
  showHand() {
    for (let c = 0; c < this.hand.length; c++) {
      this.hand[c].showCard();
    }
    return this;
  }
  playerHandCount(){
    var playerCount = 0;//how to loop this shit?
    for(let i = 0; i<= player.hand.length; i++){
        playerCount += player.hand[i].value;
    return playerCount;
    }
  }
  dealerHandCount(){
    var dealerCount = 0;//how to loop this shit?
    for(let i = 0; i<= dealer.hand.length; i++){
        dealerCount += dealer.hand[i].value;
    return dealerCount;
    }
  }
}

class BJGame{
  constructor(player,dealer){
    this.player = player;
    this.dealer = dealer;
    this.deck = new Deck();
  }
  dealerDraw(){
    dealer.draw(this.deck);
    dealer.draw(this.deck);
    return this;
  }
  playerDraw(){
    player.draw(this.deck);
    player.draw(this.deck);
    return this;
  }
  game(){
    //build dealer initial hand
    console.log("dealer has:");
    this.dealer.showHand();
    //build player initial hand
    console.log("you have:");
    this.player.showHand();
    if(player.playerHandCount() > dealer.dealerHandCount()){
        console.log("you probably win");
    }
    else{
        console.log("you're an idiot");
    }
    return this;
  }
}

var player = new Player("shiv");
var dealer = new Player('Dealer');
cheese = new BJGame(player,dealer);
cheese.dealerDraw().playerDraw().game();
/* var deck1 = new Deck();

console.log("deck built");
deck1.showDeck();

console.log("WE SHUFFLIN")
deck1.shuffleDeck().showDeck();

console.log("SHIV ENTERS THE GAME")
var shiv = new Player('Shiv');
console.log("SHIV'S HAND");
shiv.draw(deck1).draw(deck1).draw(deck1).showHand();
console.log("SHIV DISCARDED");
shiv.discard().showHand(); */
