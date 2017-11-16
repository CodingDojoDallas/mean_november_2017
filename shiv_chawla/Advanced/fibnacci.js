function fib() {
    // Some variables here
    var prev = 0;
    var cur = 1;
    function nacci() {
      // do something to those variables here
        var newcur = prev + cur;
        prev = cur;
        console.log(cur)
        cur = newcur;
        
    }
    return nacci //when you return nacci, closure.
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"