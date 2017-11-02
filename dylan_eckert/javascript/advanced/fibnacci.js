function fib() {
  var prev = 0;
  var current = 1;
  function nacci() {
    // do something to those variables here
    newCur = prev + current;
    prev = current;
    console.log(current);
    current = newCur;
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
