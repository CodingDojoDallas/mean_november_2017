function starString(num){
var str = "";
    for (var i = 0; i < num; i++){
        str += "*";
    }
    return str;
}
starString(25);

function drawStars(arr){
    var result = [];
    for (var x = 0; x < arr.length ; x++){
        console.log(starString(arr[x]));
    }
}
drawStars([5,6,8,7]);

function drawStars(arr){
    var result = [];
    for (var x = 0; x < arr.length;x++){
        if (typeof arr[x] === 'number'){
            result.push(starString(arr[x]));
        }
        else if (typeof arr[x] === 'string'){
            var str = "";
        for (var i = 0 ; i < arr[x].length ; i++){
            str += arr[x][0].toLowerCase();
        }
        result.push(string);
        }
    }
    return result;
}
console.log(drawStars[4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]);