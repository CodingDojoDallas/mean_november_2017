function fib() {
    var one = 0, two =  1;
    function nacci() {
        var temp = one;
        one = two;
        two = temp + two
        console.log(one)
    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"
  