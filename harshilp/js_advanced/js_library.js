// Underscore _ library
var _ = {
    map: function (arr, iter) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = iter(arr[i]);
        }
    },
    reduce: function (arr, iter, cache) {
        let idx = 0;
        if (!cache) {
            cache = arr[0];
            idx = 1;
        }
        for (let i = idx; i < arr.length; i++) {
            cache = iter(arr[i], cache);
        }
        return cache;
    },
    find: function (arr, condition) {
        for (let i = 0; i < arr.length; i++) {
            if (condition(arr[i])) {
                return arr[i];
            }
        }
    },
    filter: function (arr, condition) {
        let filtered = [];
        for (let i = 0; i < arr.length; i++) {
            if (condition(arr[i])) {
                filtered.push(arr[i])
            }
        }
        return filtered;
    },
    reject: function (arr, condition) {
        let filtered = [];
        for (let i = 0; i < arr.length; i++) {
            if (!condition(arr[i])) {
                filtered.push(arr[i])
            }
        }
        return filtered;
    }
}

// Test cases:

let arr = [1,2,3,4,5]
_.map(arr, function(idx) { return idx * 2});
console.log(arr)
console.log(_.reduce(arr, function(idx, cache) { return cache * idx; }))
console.log(_.find(arr, function(idx) { return idx === 9}))
console.log(_.filter(arr, function(idx) { return idx > 5}))
console.log(_.reject(arr, function(idx) { return idx > 5}))

