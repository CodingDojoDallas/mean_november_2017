//////////////////////////////// Part 1 /////////////////////////////
// Create a function called starString() that takes a number and returns a string of that many *
function starString(num){
  var str = "";
  for(var i = 0; i < num; i++){
    str += "*";
  }
  return str;
}
starString(5);

////////////////////////// Part 2 ///////////////////////////////////
//Create a function called drawStars() that takes an array of numbers and prints out *
function drawStars(arr){
  var result = [];
  for(var i = 0; i < arr.length; i++){
    console.log(starString(arr[i]));
  }
}
drawStars([3,4,6,8]);


/////////////////////////// Part 3 /////////////////////////////////
