function starString(number){
    /*var temp = "";
    for (var i = 0; i < number; i++){
        temp += "*";
    } */
    return "*".repeat(number);
}

/* console.log(starString(8));

function starStringArr(arr){
    for(var i = 0;i<arr.length;i++){
        console.log(starString(arr[i]));
    }
    return "DJ Khaled";
}
console.log(starStringArr([1,3,5,7]));
 */
//function that takes an array, if it's a number, draw # of starts equivalent
//if it's a letter, put first letter as the number equivalanet (length)
//lowercase that shit

function starLetter(arr){
    for(var i = 0; i< arr.length; i++){
        if (typeof arr[i] === 'number'){
            console.log(starString(arr[i]));
        }
        else if (typeof arr[i] === 'string'){
            length = arr[i].length;
            temp = "";
            for (var x = 0; x< length; x++){
                temp += arr[i][0];
            }
            console.log(temp);
        }
    }
    return "DJ Khaled";
}
starLetter([1,3,"cheese",4,"blt"]);