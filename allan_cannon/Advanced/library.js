var _ = {
  map: function(arr,func) {
    newarr = []
    for(var i = 0; i < arr.length; i++){
      newarr.push(func(arr[i]))
    }
    return newarr
  },
  reduce: function(arr,func,memo = 0) {
    var start = 0
    if(memo === 0){
      memo = arr[0]
      start = 1
    }
    for(var i = start; i < arr.length; i++){
      memo = func(memo, arr[i])
    }
    return memo
  },
  find: function(arr, conditional) {
    for(var i = 0; i < arr.length; i++){
      if (conditional(arr[i]))
        return arr[i]
    }
    return undefined
   // code here;
  },
  filter: function(arr, conditional) {
    var newarr = []
    for(var i = 0; i < arr.length; i++){
      if (conditional(arr[i]))
         newarr.push(arr[i])
    }
    return newarr
  },
  reject: function(arr, conditional) {
    var newarr = []
    for(var i = 0; i < arr.length; i++){
      if (!conditional(arr[i]))
         newarr.push(arr[i])
    }
    return newarr
   // code here;
  }
}
// you just created a library with 5 methods!

console.log(_.map([1,2,3],function(x){return x*2}))
console.log(_.reduce([1,2,3,4],function(memo,x){return memo + x}))
console.log(_.find([1,2,3,4],function(num){return num % 2 === 0}))
console.log(_.filter([1,2,3,4],function(num){return num % 2 === 0}))
console.log(_.reject([1,2,3,4],function(num){return num % 2 === 0}))
