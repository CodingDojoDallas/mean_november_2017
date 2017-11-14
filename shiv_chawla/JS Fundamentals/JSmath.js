/* Math 1
Write a function called zero_negativity(). This function should take an array. Return true if the input array contains no negative numbers, return false if it does.

Math 2
Write a function called is_even(). This function should take an number. Return true if the input number is even, return false if the number is odd.

Math 3
Write a function called how_many_even(). This function should take an array. Return the total number of elements in the array that are even. You may call is_even() to solve this.

Math 4
Write a function called create_dummy_array(). This function should take a number n. Return an array of random numbers between 0 and 9 with the length of n.

Math 5
Write a function called random_choice(). This function should take an array. Return a random element of the array, based on its length. This function should never return undefined. */
console.log("cheese");

//FIRST ONE
/* function zero_negativity(arr){
    //loop through the array
    //if check if number is negative
    for (let i = 0; i< arr.length; i++){
        if (arr[i] < 0){
            return false;
        }
    }
    return true;
}
console.log(zero_negativity([1,2,3,2,-1,2])); */

//ANOTHER ONE
function is_even(number){
    //just if check 
    if (number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
} 
//ANOTHER ONE
function how_many_even(arr){
    let count = 0;
    for (var i = 0;i< arr.length;i++){
        if (is_even(arr[i])){
            count ++;
        }
    }
    return count;
}

//ANOTHER ONE
function create_dummy_array(n){
    var math_array = [];
    for (var i = 0; i< n; i++){
        math_array.push(Math.floor(Math.random()*10))
    }
    return math_array;
}

console.log(create_dummy_array(9));

//ANOTHER ONE
function random_choice(array){
    const length = array.length;
    return array[Math.floor(Math.random()*length)]
}
console.log(random_choice([1,1,232,343,35,453,53,53]))