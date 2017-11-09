function fib() {
  var num1 = 0
  var num2 = 0
  // Some variables here
  function nacci() {
    if (num2 === 0){
      console.log(1)
      num2 = 1
    }
    else{
      console.log(num1+num2)
      var num3 = num1 + num2
      num1 = num2
      num2 = num3
    }
    // do something to those variables here
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
