function starString(arg){
    let stars = "";
    for(let i = 0; i < arg; i++)
        stars += "*";
    return stars;
}

function drawStars(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i]; j++)
            console.log("*");
        console.log("\n");
    }
}

function drawStars(arr){
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'string'){
            for(let j = 0; j < arr[i].length; j++)
                console.log(arr[i][0].toLowerCase());
            console.log("\n");
        }
        else if(typeof arr[i] === 'number'){
            for(let j = 0; j < arr[i]; j++)
                console.log("*");
            console.log("\n");
        }
    }
}

let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"];
drawStars(x);