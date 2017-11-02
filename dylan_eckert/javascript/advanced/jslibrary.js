var _ = {
  map: function(arr, callback, modifier) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      newArr.push(callback(arr[i], modifier));
    }
    return newArr;
  },
  reduce: function(arr, callback, startVal) {
    if (startVal) {
      var idx = 0;
      var total = startVal;
    } else {
      var idx = 1;
      var total = arr[0];
    }
    for (var i = idx; i < arr.length; i++) {
      var newTotal = callback(arr[i], total);
      total = newTotal;}
    return total;
  },
  find: function(arr, callback, findthis) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i], findthis)) {
        newArr.push(arr[i]);
      }else{
        continue;
      }
    }
    if (newArr[0]) {
      return "Found "+newArr+"!";
    } else {
      return "Couldn't find your selected thing!";
    }
  },
  filter: function(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr
  },
  reject: function(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (!callback(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr
  }
}
// These are the functions needed for the _ methods:
// filter method function:
function isEven(num) {
  return num % 2 == 0;
};
// map method function:
function transform(num, modifier) {
  return num * modifier;
};
// reduce method function:
function combine(num, total) {
  return num + total;
};
// find method function:
function finding(val, compare) {
  return val == compare;
};
// reject method function:
function isOdd(num) {
  return num % 2 == 0;
};

// you just created a library with 5 methods!
// FILTER
var evens = _.filter([1, 2, 3, 4, 5, 6], isEven);
console.log(evens); // if things are working right, this will return [2,4,6].
// MAP
var map2 = _.map([1, 2, 3, 4], transform, 2);
console.log(map2) // if things are working right, this will return [2,4,6,8].
var map3 = _.map([1, 2, 3, 4], transform, 3);
console.log(map3) // if things are working right, this will return [3,6,9,12].
var map15 = _.map([1, 2, 3, 4], transform, 15);
console.log(map15) // if things are working right, this will return [15,30,45,60].
// REDUCE
var startValNull = _.reduce([1, 2, 3, 4, 5], combine); // should return 15
console.log(startValNull);
var startValZero = _.reduce([1, 2, 3, 4, 5], combine, 0); // should return 15
console.log(startValZero);
var startValTwo = _.reduce([1, 2, 3, 4, 5], combine, 2); // should return 17
console.log(startValTwo);
// FIND
var find5 = _.find([3,4,5,1,6,7], finding, 5) // should return Found 1!
console.log(find5)
var findstring1 = _.find(['hello', 'world'], finding, 'world')
console.log(findstring1);
var find2 = _.find([3,4,5,1,6,7], finding, 2) // should return Couldn't find your selected thing!
console.log(find2)
// REJECT
var odds = _.reject([1, 2, 3, 4, 5, 6], isOdd);
console.log(odds); // if things are working right, this will return [2,4,6].
