var _ = {
    map: function(list, callback, mapped=[]) {
        if (callback.constructor != Function) {
            return "You did not provide a valid function for a callback.";
        }
        else if (list.constructor === Array || list.constructor === Object) {
            for (var pos in list) {
                mapped.push(callback(list[pos]));
            }
        }
        else {
            return "The object you have passed is not iterable.";
        }
        return mapped;
    },
    reduce: function(list, callback, initial_val=0) {
        if (callback.constructor != Function) {
            return "You did not provide a valid function for a callback.";
        }
        else if (list.constructor != Array) {
            return "The object you have passed is not an array.";
        }
        var reduced_val;
        if (initial_val != 0) {
            reduced_val = callback(initial_val, list[0]);
        }
        else {
            reduced_val = list[0];
        }
        for (var i = 1; i < list.length; i++) {
            reduced_val = callback(reduced_val, list[i]);
        }
        return reduced_val;
    },
    find: function(list, callback) {
        if (callback.constructor != Function) {
            return "You did not provide a valid function for a callback.";
        }
        var found;
        if (list.constructor === Array || list.constructor === Object) {
            for (var pos in list) {
                if (callback(list[pos])) {
                    found = list[pos];
                    break;
                }
            }
            return found;
        }
        else {
            return "The object you passed is not iterable.";
        }
    },
    filter: function(list, callback, filtered=[]) {
        if (callback.constructor != Function) {
            return "You did not provide a valid function for a callback.";
        }
        else if (list.constructor === Array || list.constructor === Object) {
            for (var pos in list) {
                if (callback(list[pos])) {
                    filtered.push(list[pos]);
                }
            }
            return filtered;
        }
        else {
            return "The object you passed is not iterable.";
        }
    },
    reject: function(list, callback, not_rejected=[]) {
        if (callback.constructor != Function) {
            return "You did not provide a valid function for a callback.";
        }
        else if (list.constructor === Array || list.constructor === Object) {
            for (var pos in list) {
                if (!callback(list[pos])) {
                    not_rejected.push(list[pos]);
                }
            }
            return not_rejected;
        }
        else {
            return "The object you passed is not iterable.";
        }
    }
}

// map - squares - expecting [1,4,9,16,25]
var squares = _.map([1,2,3,4,5], function(num){ return num*num; });
console.log(squares);

// map - halves - testing object - expecting [5,10,15,20,25]
var halves = _.map({a: 10, b: 20, c: 30, d: 40, e:50}, function(num){ return num/2; });
console.log(halves);

// reduce - addition - no initial val - expecting 15
var reduced = _.reduce([1,2,3,4,5], function(x,y){ return x + y; });
console.log(reduced);

// reduce - addition - initial val of 5 - expecting 20
var reduced2 = _.reduce([1,2,3,4,5], function(x,y){ return x + y; }, 5);
console.log(reduced2);

// reduce - multiplication - no initial val - expecting 120
var reduced3 = _.reduce([1,2,3,4,5], function(x,y){ return x*y; });
console.log(reduced3);

// testing error check - should get a return message not error
var reduced_test_error = _.reduce("potato", function(x,y){ return x+y; });
console.log(reduced_test_error);

// testing function error check - should get message, not error
var function_error_test = _.reduce([1,2,3], "break me");
console.log(function_error_test);

// find - odd - expecting 7
var first_odd = _.find([2,4,6,7,8,10], function(num) { return num % 2 != 0; });
console.log(first_odd);

// filter - for numbers that are greater than 10 - expecting [11, 12, 13, 14, 15]
var big_nums = _.filter([1,11,2,12,3,13,4,14,5,15], function(num) { return num > 10; });
console.log(big_nums);

// reject - removing elements that are negative - expecting [1,2,3]
var pos_nums = _.reject([-3,-2,-1,1,2,3], function(num) { return num < 0; });
console.log(pos_nums);