function fib() {
    var start = [0,1];
    function nacci() {
        console.log(start[start.length-1]);
        let last_two = start[start.length-1] + start[start.length-2];
        start.push(last_two);
    }
    return nacci;
}
var fibCounter = fib();
for (var i = 0; i < 10; i++) {
    fibCounter();
}