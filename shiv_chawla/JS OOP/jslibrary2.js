var cheese = {
   map: function() {
     //code here;
   },
   reduce: function() { 
     // code here;
   },
   find: function(arr,callback) {   
     var found;
     for(i = 0; i< arr.length; i++){
         if(callback(arr[i])){
            found = arr[0];
         }
     }
     return found;
   },
   filter: function(arr,callback) { 
     var newArr = [];
     for(i = 0; i< arr.length; i++){
         if(callback(arr[i])){
             newArr.push(arr[i]);
         }
     }
     return newArr;
   },
   reject: function() { 
     // code here;
   }
 }
// you just created a library with 5 methods!
var hey = cheese.find(
    [1,2,3,4,5],function(num){
        if (num == 4){
            return true;
        }
    }
)
console.log(hey)

var yay = cheese.filter(
    [1,2,3,4,3,8,6],function(num){
        return num % 2 == 0;
    }
)
console.log(yay)
