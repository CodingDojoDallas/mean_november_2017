class Card {
    constructor(suit, value) {
        this.suit = suit;
        if (value == 13) {
            this.value = 'King';
        } else if (value == 12) {
            this.value = 'Queen';
        } else if (value == 11) {
            this.value = 'Jack';
        } else if (value == 1) {
            this.value = 'Ace';
        } else {
            this.value = value;
        }
    }

    show() {
        console.log(`${this.value} of ${this.suit}`)
    }
}

class Deck {
    constructor() {
        this.deckList = []
        this.initiate = function() {
            var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
            for (let i = 0; i < suits.length; i++) {
                for (let j = 1; j < 14; j ++) {
                    this.deckList.push(new Card(suits[i], j))
                }
            }
        }
        this.initiate()
        
    }
    show() {
        for (let k = 0; k < this.deckList.length; k++) {
            this.deckList[k].show()
        }
        console.log('~~~~~~~~~~~~~~~~~~~~~~~');        
        return this;
    }

    deal() {
        let index = Math.floor(Math.random() * 52);
        var dealt = this.deckList.splice(index,1);
        return dealt[0];
    }

    reset() {
        this.deckList.splice(0, this.deckList.length);
        this.initiate();
        return this;
    }

    shuffle() {
        var m = this.deckList.length, t, i;
        
        // While there remain elements to shuffle…
        while (m) {
        
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
        
            // And swap it with the current element.
            t = this.deckList[m];
            this.deckList[m] = this.deckList[i];
            this.deckList[i] = t;
        }
        return this;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = []
    }

    draw(deck) {
        this.hand.push(deck.deal())
        return this;
    }

    showHand() {
        for (let l = 0; l < this.hand.length; l++) {
            this.hand[l].show();
        }
        console.log('~~~~~~~~~~~~~~~~~~~~~~~');
        return this;
    }

    discard() {
        let index = Math.floor(Math.random() * this.hand.length);
        var discard = this.hand.splice(index,1);
        console.log(`${this.name} discarded: `)
        discard[0].show()
        console.log('~~~~~~~~~~~~~~~~~~~~~~~');        
        return this;
    }
}

var deck1 = new Deck();

// let dealt = deck1.deal()
// dealt.show()
// deck1.show()
// deck1.reset()
// deck1.show()

var player = new Player('Harshil')
player.draw(deck1).draw(deck1)
player.draw(deck1)
player.draw(deck1)
player.showHand()
// deck1.show()
player.discard()
player.showHand()
deck1.shuffle()
deck1.show()
