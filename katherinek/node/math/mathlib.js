module.exports = function() {
	return {
		add: function(a, b) {
			return a + b
		},
		multiply: function(a, b) {
			return a * b	
		},
		square: function(a) {
			return a * a
		},
		random: function(a, b) {
			return Math.floor(Math.random(a, b))	
		}	
	}
}