function Card(suit, value){
	this.suit = suit;
	this.value = value;
	this.show = function(){
	  return `${this.suit}${this.value}`
	}
}
function Deck(size = 1){
	var self =this;
	self.size = size;
	self.cards = [];
	// creates a deck and resets
	self.reset();
	this.show = function(){
	  var string = "Deck: \n"
	  for (var i = 0; i < this.cards.length; i++) {
		string += "["+this.cards[i].show() + "]\n"
	  }
	  return string;
	}
}
// shuffles the deck
Deck.prototype.shuffle = function () {
	for (var i = 0; i < this.cards.length; i++) {
	  var swap = Math.floor(Math.random()*this.cards.length);
	  var temp = this.cards[i];
	  this.cards[i] = this.cards[swap];
	  this.cards[swap] = temp;
	}
};
// resets the deck
Deck.prototype.reset = function () {
	this.cards = [];
	var suit = ['h', 'd', 'c', 's'];
	var value = [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k'];
	for (let h = 0; h< this.size; h++){
		for (var i = 0; i < suit.length; i++) {
		  for (var j = 0; j < value.length; j++) {
			this.cards.push(new Card(suit[i],value[j]))
		  }
		}
	}
};
// deals a random card
	Deck.prototype.deal = function () {
	return this.cards.pop()
};
function Player(name){
	this.name = name;
	this.hand = [];
}

Player.prototype.draw = function(deck) {
	this.hand.push(deck.deal())
}
Player.prototype.discard = function(index){
	return this.hand.splice(index, 1);
}

//a blackjack game
function blackjack(){
	
	var self = this;
	self.player;
	self.dealer;
	self.deck = new Deck(1)
	
	//resets the game. 
	self.new_game = function(){
		var name = self.player !==undefined ? self.player.name : "player";
		name = prompt("Please enter a name", name)
		self.player = new Player(name)
		
		//draws the players name to the screen
		document.getElementById("playername").innerHTML = self.player.name
		self.dealer = new Player("dealer")
		
		//reset the deck, shuffle the deck, player draws 2 cards
		self.deck.reset();
		self.deck.shuffle();
		
		self.player.draw(self.deck);
		self.player.draw(self.deck);
		
		self.updateScreen();
		
	}
	
	//gets the value of a given player's hand
	this.addHand = function(player){
		let sum = 0
		let num_aces = 0
		//add up all the non aces, and count the aces
		for (let i = 0; i<player.hand.length; i++){
			let card = player.hand[i];
			
			if (typeof card.value == "string") //if value is 'k', 'j', 'q' add 10 to sum
				sum += 10;
			else if (card.value != 1)	//else if value is not 1 ad the value to sum
				sum += card.value;
			else 						//else its an ace, so add to num_aces
				num_aces++;
		}
		//determine the value of any aces
		for (let i = 0; i < num_aces; i++){
			if ((sum + 11) < 21)
				sum += 11;
			else if ((sum + 11) == 21 && i+1 == num_aces) //only if its the last ace
				sum += 11;
			else
				sum += 1
		}
		return sum;
	}
	
	//draws a card to player's hand and calls updatescreen()
	self.hit = function(){
		self.player.draw(self.deck);
		self.updateScreen();
	}
	
	//does end game logic
	self.stand = function(){
		
		//dealer draws until over 17
		let dealer_sum = self.addHand(self.dealer);
		while (dealer_sum <17){
			self.dealer.draw(self.deck)
			dealer_sum = self.addHand(self.dealer);
		}
		
		//display the dealers hand and score with updatescreen
		self.updateScreen()
		element = document.getElementById("dealerscore").innerHTML = self.addHand(self.dealer)
		
		//add up the players hand
		let player_sum = self.addHand(self.player);
		
		//slight delay for dramatic effect...
		setTimeout(function(){
			
			//determine who won and alert
			string = ""
			if (player_sum > 21)
				string = "You are over 21! You lose!";
			else if (dealer_sum >21)
				string =  "Dealer bust! You win!";
			else if (player_sum > dealer_sum)
				string =  "You are less than 21 and more than the dealer, You Win!"
			else if (player_sum == dealer_sum)
				string =  "Draw!";
			else
				string = "dealer is more than you, You Lose!";
			
			alert(string);
		},1000);
	}
	
	//updates the html to reflect the player and dealer's hands
	self.updateScreen = function(){
		var element = document.getElementById("playerhand")
		element.innerHTML = "";
		for (let i = 0; i< self.player.hand.length;i++){
			card = document.createElement("IMG")
			card.className = "card"
			card.src = "cards/"+self.player.hand[i].show()+".png";
			element.appendChild(card);
		}
		
		element = document.getElementById("playerscore").innerHTML = self.addHand(self.player)
		
		element = document.getElementById("dealerhand")
		element.innerHTML = "";
		for (let i = 0; i< self.dealer.hand.length;i++){
			card = document.createElement("IMG")
			card.className = "card"
			card.src = "cards/"+self.dealer.hand[i].show()+".png";
			element.appendChild(card);
		}
		element = document.getElementById("dealerscore").innerHTML = "?"

	}
	
}

//create instance of game
var game = new blackjack();
game.new_game();

//add listeners to the buttons
document.getElementById("hit").addEventListener("click",game.hit);
document.getElementById("stand").addEventListener("click",game.stand);
document.getElementById("reset").addEventListener("click",game.new_game);