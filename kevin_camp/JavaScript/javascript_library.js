//JavaScript Library

var _ = {

	map: function(arr, callback) {
		var mapArr = [];
		for (i = 0; i < arr.length; i++) {
			mapArr.push(callback(arr[i]));
		}
		return mapArr;
	},

	reduce: function(arr, callback, memo) {
		var reduceArr = [];
		for (i = 0; i < arr.length; i++) {
			memo = callback(memo, arr[i]);
		}
		return memo;
	},
	find: function(arr, callback) {
		var findVal;
		for (i = 0; i < arr.length; i++) {
			if (callback(arr[i]) == true) {
				findVal = arr[i];
				return findVal;
			}
		}
	},

	filter: function(arr, callback) {
		var filterArr = [];
		for (i = 0; i < arr.length; i++) {
			if (callback(arr[i]) == true) {
				filterArr.push(arr[i]);
			}
		}
		return filterArr;
	},
	reject: function(arr, callback) {
		var rejectArr = [];
		for (i = 0; i < arr.length; i++) {
			if (callback(arr[i]) == false) {
				rejectArr.push(arr[i]);
			}
		}
		return rejectArr;
	}
};

//Test Library

//Test Map
var mapTest = _.map([1, 2, 3, 4, 5, 6, 7, 8, 9], function(num) {
	return num * 3;
});
console.log("Test Map - Elements * 3 -> " + mapTest);

//Test reduce
var reduceTest = _.reduce([1, 2, 3, 4, 5, 6, 7, 8, 9], function(num, memo) {
	return memo + num;
}, 0);
console.log("Test Reduce - Sum of Elements -> " + reduceTest);

// Test find
var findTest = _.find([1, 2, 3, 4, 5, 6, 7, 8, 9], function(num) {
	return num % 2 != 0
});
console.log("Test Find - First Odd -> " + findTest);

//Test filter
var filterTest = _.filter([1, 2, 3, 4, 5, 6, 7, 8, 9], function(num) {
	return num % 2 == 0;
});
console.log("Test Filter - Evens -> " + filterTest);

//test reject
var rejectTest = _.reject([1, 2, 3, 4, 5, 6], function(num) {
	return num % 2 == 0;
});
console.log("Test Reject - Return Odds -> " + rejectTest);
