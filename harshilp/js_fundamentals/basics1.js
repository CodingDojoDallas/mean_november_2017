// Basic 1
var x = []
console.log(x)
x.push('coding', 'dojo','rocks')
x.pop()
console.log(x)

// Basic 2
const y = []
console.log(y)
y.push(88)
console.log(y)

// Basic 3
var z = [9, 10, 6, 5, -1, 20, 13, 2]
for (var i = 0; i < z.length; i++) {
    console.log(z[i])
}
for (var i = 0; i < z.length - 1; i++) {
    console.log(z[i])
}

// Basic 4
var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
for (var i = 0; i < names.length; i++) {
    console.log(names[i].length)
}

for (var i = 0; i < names.length; i++) {
    if (names[i].length == 5) {
        console.log(names[i])
    }
}

// Basic 5
function yell (string) {
    return string.toUpperCase()
}

console.log(yell('hi'))