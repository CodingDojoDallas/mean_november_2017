var _ = {
    map: function(arr,condition) {
      for(let i = 0;i< arr.length;i++){
          arr[i] = condition(arr[i]);
      }
      return arr;
    },
    reduce: function(arr,condition,memo) {
        if(!memo){
            var x = arr[0];
            var idx = 1;   // [1,2,3]
        }
        else{
            var x = memo;
            var idx = 0;
        }
        for (let i = idx; i<arr.length;i++){
            x = condition(arr[i],x)
        }
        return x;
    },
    find: function(arr,condition) {   
      var found;
      for(let i = 0; i< arr.length;i++){
          if(condition(arr[i])){
              found = arr[i];
              return found;
          }
      }
    },
    filter: function(arr,condition) { 
        var newArr = [];
      for(let i = 0;i < arr.length;i++){
          if(condition(arr[i])){
            newArr.push(arr[i]);
          }
      }
      return newArr;
    },
    reject: function(arr, condition) { 
        var newArr = [];
        for(let i =0; i< arr.length;i++){
            if(! condition(arr[i])){
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },
    thang: function(arr, condition){
        var newArr = [];
        for(let i = 0; i< arr.length; i++){
            if(condition(arr[i])){
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
  }
//run thang
console.log(_.thang([0,2,3,4,2,1],function(num){return num < 2}))


 function combineSum(num,x){
    return num + x;
 }
console.log(_.reduce([0,1,2,3],combineSum,3));
/* 
let even = _.filter([0,1,2,3],function(num){return num % 2 == 0})
 console.log(even)

 let rejects = _.reject([0,1,2,3],function(num){return num % 2 == 0})
 console.log(rejects)

 let found = _.find([0,1,32432,2,3,4,3,2],function(num){return num == 5})
 console.log(found)

 let multiplybydos = _.map([0,2,3,5,3,2],function(num){return num*2})
 console.log(multiplybydos)

 let reduce = _.reduce([0,1,2,3,4],function(num){return num * 2})
 console.log(reduce) */