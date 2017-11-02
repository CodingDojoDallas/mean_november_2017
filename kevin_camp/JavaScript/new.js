var _ = {
   map: function(arr, callback){
     var newArr = [];
		 for(i in arr){
			 newArr.push (callback(arr[i]));
		 }
		 return newArr;
   },
   reduce: function(arr, callback, memo){
		 for(i in arr){
			 memo = callback(memo, arr[i])
		 }
     return memo;
   },
   find: function(arr, predicate){
     // code here;
   },
   filter: function isEven(arr, callback){
     // code here;
   },
   reject: function(arr, callback){
     // code here;
   }
 }
//Test ._map
var mapTest = _.map([1,2,3,4,5,6,7,8,9], function(num) { return num * 3; });
console.log("Test Map Function -> " + mapTest);
//Test ._reduce
var reduceTest = _.reduce([1,2,3,4,5,6,7,8,9], function(memo,num) { return memo + num; }, 0);
// console.log("Test Reduce Function -> " + reduceTest );
// //Test ._find
// var findTest = _.find([1,2,3,4,5,6,7,8,9]), function(num){return }
// // var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// // console.log(evens); // if things are working right, this will return [2,4,6].
