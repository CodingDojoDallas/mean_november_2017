var math = require('./mathlib.js')();


x = 6
y = 16

console.log("x + y is " + math.add(x,y))
console.log("x * y is " + math.multiply(x,y))
console.log("x squared is " + math.square(x))
console.log("x + y is " + math.random(x,y))

