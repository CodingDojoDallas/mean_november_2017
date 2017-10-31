function basic1(){
    var x = [];
    x.push('coding','dojo','rocks');
    x.pop();
  console.log(x)
  }
  basic1();


function basic2(){
    const y = [];
    y.push(88)
    console.log(y)
}
basic2();

function basic3(){
    var z = [9,10,6,5,-1,20,13,2]
    for (var i = 0;i < z.length;i++){
      console.log (z[i])
    }
    for (var i = 0;i < z.length-1;i++){
      console.log (z[i])
    }  
}
// // basic3();

function basic4(){
    var names = ['Katie','Joe','Fritz','Pierre','Alphonso'];
    for (var i = 0;i < names.length;i++){
      for (var a = 0; a < names[i].length ; a++){
        if (names[i].length == 5){
        console.log(names[i]);
        }
      }
    }
  }
  basic4();


