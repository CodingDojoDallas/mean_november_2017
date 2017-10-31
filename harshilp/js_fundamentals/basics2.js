function magic_multiply(x, y){
    if (x.constructor === Array) {
        for (let i = 0; i < x.length; i++) {
            x[i] = x[i] * y;
        }
        return x;
    } else if (y.constructor === String) {
        return 'Error: Cannot * by a string';
    } else if (x.constructor === String) {
        var ret = ''
        for (let j = 0; j < y; j++) {
            ret += x;
        }
        return ret;        
    } else {
        x = x * y;
    }
    return x;
}

let test1 = magic_multiply(5, 2);
console.log(test1);

let test2 = magic_multiply(0, 0);
console.log(test2);

let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);

let test4 = magic_multiply(7, "three");
console.log(test4);

let test5 = magic_multiply("Brendo", 4);
console.log(test5);