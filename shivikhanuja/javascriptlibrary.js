var _ = {
    map: function(arr, callback) {
        // create a new array
        var newArr = [];

        // loop through each value in arr
        for (var i = 0; i < arr.length; i++) {
            // use the callback function on each index
            newArr.push(callback(arr[i]));
        }
        
        // return newArr
        return newArr;
    },
    filter: function(arr, callback) {
        var newArr = [];

        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                newArr.push(arr[i]);
            }
        }

        return newArr;
    },
    find: function(arr, callback){
        var newArr = [];

        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                newArr.push(arr[i]);
            }
        }  

        return newArr;
    },
    reject: function(arr, callback){
        var newArr = [];

        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                newArr.push(arr[i]);
            }
        }  

        return newArr;
    },
    reduce: function(arr, callback){
        var sum = 0;

        for (var i =0; i < arr.length ; i++) {
            sum = callback(sum , arr[i]);
        } 
        return sum;
    }
}

var result = _.map([1, 2, 3], function(value) { return value * 2 });
// def map
//     self.each do |i|
//         yield i
//     end
// end
// @result = [1, 2, 3].map { |value| return value * 2 }

console.log(result);

var result = _.filter([1, 2, 3, 4, 5, 6], function(value) { return value % 2 == 1 });
console.log(result);

var result = _.find([1, 2, 3, 4, 5, 6], function(value) { return value % 2 == 0 });
console.log(result);

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(result);

var reduce = _.reduce([1,2,3,4,5,6], function(x,y) { return x + y});
console.log(reduce);