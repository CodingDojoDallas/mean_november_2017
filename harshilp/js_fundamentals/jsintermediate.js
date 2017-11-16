// Part 1
function stars (n) {
    var newString = '';
    for (let i = 0; i < n; i++) {
        newString += '*'        
    }
    return newString;
}
console.log(stars(3))

// Part 2
function starsArray (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log('*'.repeat(arr[i]))        
    }
}
starsArray([1,2,3,4,5])

// Part 3
function draw (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].constructor === String) {
            console.log(arr[i].charAt(0).repeat(arr[i].length))
        } else {
            console.log('*'.repeat(arr[i]))
        }
    }
}

draw(['Harshil', 2, 'Patel', 1])