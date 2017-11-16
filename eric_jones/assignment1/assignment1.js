let x = [];
x.push('coding', 'dojo', 'rocks');
x.pop();
console.log(x);

const y = [];
y.push(88);


let z = [9,10,6,5,-1,20,13,2];
console.log(z);
console.log(z.slice(0,7));

let names = ['Kadie','Joe','Fritz','Pierre','Alphonso'];
for(let i = 0; i < names.length; i++){
  console.log(len(names[i]));
}
for(let i = 0; i < names.length; i++){
  if(len(names[i]) == 5){
    console.log(names[i]);
  }
}

function yell(str){
  return str.toUpperCase();
}