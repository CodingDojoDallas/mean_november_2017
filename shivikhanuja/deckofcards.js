<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Deck O Cards</title>
	</head>
	<body>
		<script type="text/javascript">
			function cardConstructor(suit, value){
				var self = this;
				this.card = [];
				this.suit = suit;
				this.value = value;
			}

			cardConstructor.prototype.methodDeck = Deck(){
				var self = this;
				this.deck = [];

				var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
				var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
				for(let suit in suits){
					for(let value in values){
						this.deck.push(self.card(self.suit, self.value));
					}
				}
				return this.deck
			}
			console.log(function());

		</script>
	</body>
</html>