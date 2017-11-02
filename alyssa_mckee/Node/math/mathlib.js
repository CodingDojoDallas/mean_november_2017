module.exports = new (function(){
	this.total = 0;
	
	this.add = function(a,b = this.total){
		this.total = a + b;
		return this
	}
	this.multiply = function(a,b = this.total){
		this.total = a*b;
		return this;
	}
	this.square = function(a = this.total){
		this.total = a * a;
		return this;
	}
	this.random = function(a, b){
		this.total = Math.floor(Math.random()*(b-a))+a;
		return this;
	}
})();