function zero_negativity(arr){
    let ret = true;
    for(let i = 0; i < arr.length; i++)
        if(arr[i] < 0){
            ret = false;
            break;
        }
    return ret;
}

function is_even(arg){
    return arg % 2 ? false : true;
}

function how_many_even(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++)
        if(is_even(arr[i]))
            count++;
    return count;
}

function create_dummy_array(arg){
    let dummy = [];
    for(let i = 0; i < arg; i++)
        dummy.push(Math.floor(Math.random() * 10));
    return dummy;
}

function random_choice(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}