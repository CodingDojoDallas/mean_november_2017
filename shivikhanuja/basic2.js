function magic_multiply(x,y){
    var x = x*y;
    return x;
}
magic_multiply(5,2);


function magic_multiply(x,y){
    var x = x*y;
    return x;
}
magic_multiply(0,0);


function magic_multiply(x,y){
    for (var i = 0;i < x.length; i++){
      x[i] = x[i] * y;
    }  
     return x;
}
magic_multiply([1,2,3],2);

function magic_multiply(x,y){
    if (y.constructor === String ){
        console.log("Error. Can not multiply by string")
    }    
}
magic_multiply(7,"three");


function magic_multiply(x,y){
    string = "";
    for (var i = 0;i < y; i++){
      string += x;
    }
    console.log(string);
  }
  magic_multiply("Brendo",4);




