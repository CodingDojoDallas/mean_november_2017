class Card {
    constructor(val, suit) {
        this.val = val;
        this.suit = suit;
    }
    display_info() {
        var val;
        var faces = {
            11: 'Jack',
            12: 'Queen',
            13: 'King',
            14: 'Ace'
        };
        if (this.val < 11) {
            val = this.val;
        }
        else {
            val = faces[this.val];
        }
        return val + " of " + this.suit;
    }
}

class Deck {
    constructor() {
        this.reset_deck();
    }
    reset_deck() {
        this.contents = [];
        var suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
        for (var j in suits) {
            for (var i = 2; i < 15; i++) {
                this.contents.push(new Card(i, suits[j]));
            }
        }
        return this;
    }
    display_contents() {
        for (var i = 0; i < this.contents.length; i++) {
            console.log(this.contents[i].display_info());
        }
        return this;
    }
    shuffle() {
        var remaining = this.contents.length;
        while (remaining > 0) {
            let rng = Math.floor(Math.random()*remaining);
            let temp = this.contents[remaining-1];
            this.contents[remaining-1] = this.contents[rng];
            this.contents[rng] = temp;
            remaining--;
        }
        return this;
    }
    deal() {
        let rng = Math.floor(Math.random()*this.contents.length);
        let card = this.contents.splice(rng, 1);
        return card[0];
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    display_hand() {
        console.log(this.name + "'s Hand:");
        for (var i = 0; i < this.hand.length; i++) {
            console.log(this.hand[i].display_info());
        }
        return this;
    }
    draw(card) {
        this.hand.push(card);
        return this;
    }
    discard(card) {
        var idx = this.hand.indexOf(card);
        this.hand.splice(idx, 1);
        return this;
    }
}

var deck = new Deck();
deck.shuffle().display_contents();
var player = new Player("Stephen");
player.draw(deck.deal());
player.display_hand();
player.discard(player.hand[0]);
player.display_hand();

