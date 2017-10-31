// Math 1
function zero_negativity (arr) {
    var ret = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            ret = false;
        }
    }
    return ret;
}

console.log(zero_negativity([1,-1]))

// Math 2
function is_even (num) {
    var ret = true;
    if (num % 2 != 0) {
        ret = false;
    }
    return ret;
}
console.log(is_even(9))

// Math 3
function how_many_even (arr) {
    var count = 0
    for (let i = 0; i < arr.length; i++){
        if (is_even(arr[i])) {
            count ++;
        }
    }
    return count;
}
console.log(how_many_even([1,2,4,4]))

// Math 4 
function create_dummy_array (n) {
    var arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
}
console.log(create_dummy_array(9))

// Math 5
function random_choice (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(random_choice([1,2,3,4,5,6,7,8,9]))