var _ = {
   map: function(arr, callback) {
     //Produces a new array
     var new_Array = [];
     for(var i = 0; i < arr.length; i++){
       new_Array.push(callback(arr[i]));
     }
     return new_Array;
   },

   reduce: function(arr, callback) {
     // Also known as inject and foldl, reduce boils down a list of values into a single value.
     var sum = 0;
     for(var i = 0; i< arr.length; i++){
       sum = callback(sum, arr[i]);
     }
     return sum;
   },

   find: function(arr, callback) {
     /* Looks through each value in the list, returning the first one that passes
     a truth test (predicate), or undefined if no value passes the test. */
     for(var i = 0; i < arr.length; i++){
       if(callback(arr[i]) == true){
         return arr[i];
       }
     }
   },

   filter: function(arr, callback) {
     /* Looks through each value in the list, returning an array of all the values
     that pass a truth test (predicate).*/
     var f_Array = [];
     for(var i = 0; i < arr.length; i++){
       if(callback(arr[i]) == true){
         f_Array.push(arr[i]);
         }
     }
     return f_Array;
   },

   reject: function(arr, callback) {
     /* Returns the values in list without the elements that the truth test (predicate)
     passes. The opposite of filter.*/
     var r_Array = [];
     for(var i = 0; i < arr.length; i++){
       if(callback(arr[i]) == false){
         r_Array.push(arr[i]);
       }
     }
     return r_Array;
   }
 }
// you just created a library with 5 methods!
var multiply = _.map([1,2,3], function(num){return num * 2});
console.log(multiply);

var comparison = _.find([1,2,3,4], function(num){return num == 2});
console.log(comparison);

var filter = _.filter([10, 2, 3 ,4], function(num){return num % 2 == 0});
console.log(filter);

var reject = _.reject([10, 3, 6, 1], function(num){return num % 2 == 0});
console.log(reject);

var reduce = _.reduce([10, -2, 3, 6], function(a, b){return a + b});
console.log(reduce);
