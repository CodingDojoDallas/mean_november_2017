$(document).ready(function() {
    class Card {
        constructor(val, suit) {
            this.val = val;
            this.suit = suit;
        }
        display_info() {
            return this.suit + this.val;
        }
    }    
    class Deck {
        constructor() {
            this.reset_deck();
        }
        reset_deck() {
            this.contents = [];
            var suits = ['h', 'c', 'd', 's'];
            var faces = ['j', 'q', 'k'];
            for (var j in suits) {
                for (var i = 1; i < 11; i++) {
                    this.contents.push(new Card(i, suits[j]));
                }
                for (var k in faces) {
                    this.contents.push(new Card(faces[k], suits[j]));
                }
            }
            this.shuffle();
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
        constructor() {
            this.hand = [];
            this.bet = 0;
            this.chips = 100;
            this.hand_finished = false;
        }
        hand_value() {
            var total = 0;
            var ace_ct = 0;
            for (var i = 0; i < this.hand.length; i++) {
                if (this.hand[i].val === 'j' || this.hand[i].val === 'q' || this.hand[i].val === 'k') {
                    total += 10;
                }
                else if (this.hand[i].val === 1) {
                    total += 11;
                    ace_ct++;
                }
                else {
                    total += this.hand[i].val;
                }
            }
            while (total > 21 && ace_ct > 0) {
                for (var j = 0; j < this.hand.length; j++) {
                    if (this.hand[j].val === 1) {
                        total -= 10;
                        ace_ct--;
                    }
                }
            }
            return total;
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
        check_bust() {
            var player_total = this.hand_value();
            if (player_total > 21) {
                this.hand_finished = true;
                let message_text = "You busted! You had " + this.hand_value();
                $('#message').text(message_text);
                $('#message').css('color', 'red');
                lose_game();
            }
        }
        lose_game() {
            this.chips -= this.bet;
            $('#chips').text("Chips: " + this.chips);
            this.bet = 0;
            reset_game();
        }
    }
    function reset_game() {
        player.hand = [];
        dealer.hand = [];
        deck.reset_deck();
        $('#actions').hide();
        $('#new').show();
    }
    function card_image(card) {    
        return "url(cards/" + card.display_info() + ".png) no-repeat center";
    }
    function finish_hand() {
        player.hand_finished = true;
        var player_total = player.hand_value();
        $('#d1').css('background', card_image(dealer.hand[0]));
        var dealer_total = dealer.hand_value();
        while (dealer_total < 17) {
            dealer.draw(deck.deal());
            let card_id = "d" + dealer.hand.length;
            $('#dealer').append("<div class='card' id='" + card_id + "'></div>");
            card_id = "#" + card_id;
            $(card_id).css('background', card_image(dealer.hand[dealer.hand.length-1]));
            dealer_total = dealer.hand_value();
        }
        if (dealer_total > 21) {
            let message_text = "The dealer busted! You won!";
            $('#message').text(message_text);
            $('#message').css('color', 'green');
            player.chips += player.bet;
            $('#chips').text("Chips: " + player.chips);
            player.bet = 0;
        }
        else if (player_total > dealer_total) {
            let message_text = "You won! You had " + player_total + " to the dealer's " + dealer_total + ".";
            $('#message').text(message_text);
            $('#message').css('color', 'green');
            player.chips += player.bet;
            $('#chips').text("Chips: " + player.chips);
            player.bet = 0;
        }
        else if (dealer_total > player_total) {
            let message_text = "You lost... You had " + player_total + " to the dealer's " + dealer_total + ".";
            $('#message').text(message_text);
            $('#message').css('color', 'red');
            player.lose_game();
        }
        else {
            let message_text = "It was a push! Both you and the dealer had " + player_total + ". Your bet is pushed to the next round.";
            $('#message').text(message_text);
            $('#message').css('color', 'black');
        }
        reset_game();
    }
    var player = new Player();
    var dealer = new Player();
    var deck = new Deck();
    $('#new').click(function() {
        player.hand_finished = false;
        $('#bet_amt').text("Current Bet: " + player.bet);
        $('#message').text("");
        $('#player').html("<h2>Your Hand</h2><div class='card' id='p1'></div><div class='card' id='p2'></div>");
        $('#dealer').html("<h2>Dealer's Hand</h2><div class='card' id='d1'></div><div class='card' id='d2'></div>");
        $(this).hide();
        $('form#bet').show();
    });
    $('form#bet').submit(function(e) {
        e.preventDefault();
        var bet_amt = parseInt($(this).children("input[type='number']").val());
        if (bet_amt < player.chips) {
            player.bet += bet_amt;
            $(this).hide();
            $('#actions').show();
            $('#bet_amt').text("Current Bet: " + player.bet);
            for (var i = 0; i < 4; i++) {
                if (i < 2) {
                    player.draw(deck.deal());
                }
                else {
                    dealer.draw(deck.deal());
                }
            }
            $('#p1').css('background', card_image(player.hand[0]));
            $('#p2').css('background', card_image(player.hand[1]));
            $('#d1').css('background', 'url(cards/b2fv.png) no-repeat center');
            $('#d2').css('background', card_image(dealer.hand[1]));
            player.check_bust();
            if (player.hand_value() === 21) {
                player.hand_finished = true;
                $('#message').text("You got blackjack! You won 3/2 on your bet!");
                $('#message').css('color', 'green');
                player.bet *= (3/2);
                player.chips += player.bet;
                player.bet = 0;
                reset_game();
            }
        }
        else {
            alert("You don't have that many chips! Bet again, please.");
        }
    });
    $('#stay').click(function() {
        if (player.hand_finished === false) {
            finish_hand();
        }
    });
    $('#hit').click(function() {
        if (player.hand_finished === false) {
            player.draw(deck.deal());
            var card_id = "p" + player.hand.length;
            $('#player').append("<div class='card' id='" + card_id + "'></div>");
            card_id = "#" + card_id;
            $(card_id).css('background', card_image(player.hand[player.hand.length-1]));
            player.check_bust();
        }
    });
    $('#double').click(function() {
        if (player.hand_finished === false) {
            player.draw(deck.deal());
            player.bet *= 2;
            $('#bet_amt').text("Current Bet: " + player.bet);
            var card_id = "p" + player.hand.length;
            $('#player').append("<div class='card' id='" + card_id + "'></div>");
            card_id = "#" + card_id;
            $(card_id).css('background', card_image(player.hand[player.hand.length-1]));
            player.check_bust();
            finish_hand();
        }
    });
});