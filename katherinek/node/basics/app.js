var module = require('./module')();     //notice the extra invocation parentheses!
console.log(module);
module.greet();
module.add(5,6);