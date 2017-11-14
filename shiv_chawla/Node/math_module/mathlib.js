module.exports = (function (){//make this into a immediate function
    return {
      add: function(num1, num2) { 
        return num1 + num2;
      },
      multiply: function(num1, num2) {
           return num1 * num2; 
      },
      square: function(num) {
           return num * num; 
      },
      random: function(num1, num2) {
           min = Math.ceil(num1);
           max = Math.floor(num2);
           return Math.floor(Math.random() * (max - min)) + min;
      }
    }
  })();