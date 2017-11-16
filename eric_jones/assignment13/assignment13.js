class Deck {
    
    constructor() {
        this.deck;
        this.reset();
        this.shuffle();
    }

    reset() {
        var suits = ['Clubs','Diamonds','Hearts','Spades'];
        var numbers = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        this.deck = [];
        for(var i = 0; i < suits.length; i++) {
            for(var j = 0; j < numbers.length; j++){
                this.deck.push(numbers[j] + " " + suits[i]);
            }
        }
        return this;
    }

    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
        return this;
    }

    deal(player) {
        player.hand.push(this.deck.pop(0));
        console.log(player.hand);
        return this;
    }
}


class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    discard(pos) {
        if(0 <= pos < this.hand.length)
            this.hand.pop(pos);
        console.log(this.hand)
    }
}

let deck = new Deck();
let player = new Player("Dolph")
deck.reset();
deck.shuffle();
deck.deal(player).deal(player).deal(player);
player.discard();