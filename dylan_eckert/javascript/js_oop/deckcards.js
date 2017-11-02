class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
  showCard() {
    console.log(`[${this.suit}:${this.value}]`)
    return this
  }
}
// card1 = new Card(1, 4)
// card1.showCard();
class Deck {
  constructor() {
    this.deck = [];
    this.buildDeck()
  }
  buildDeck() {
    for (var s = 1; s < 5; s++) {
      var suit = s;
      for (var v = 1; v < 14; v++) {
        var value = v;
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
}
var deck1 = new Deck();

console.log("deck built");
deck1.showDeck();

console.log("WE SHUFFLIN")
deck1.shuffleDeck().showDeck();

console.log("SHIV ENTERS THE GAME")
var shiv = new Player('Shiv');
console.log("SHIV'S HAND");
shiv.draw(deck1).draw(deck1).draw(deck1).showHand();
console.log("SHIV DISCARDED");
shiv.discard().showHand();
