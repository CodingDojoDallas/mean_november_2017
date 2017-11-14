/* function BubbleSort(arr){
    for(var i = arr.length-1; i> 0; i--){
        for(var k=0; k< i;k++){
            console.log(arr);
            if(arr[k+1] > arr[k]){
                let temp = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = temp;
            }
        }
    }
    return arr;
}

arr1 = [-1,2,2,1,5,9,2]
*/

cheese = [
    {first_name : "Cooper",
    last_name : "Leibow"},
    {first_name : "Stephen",
    last_name : "Weil"},
    {first_name : "James",
    last_name : "Bond"},
    {first_name : "Remy",
    last_name : "Baril"},
    {first_name : "Harry",
    last_name : "Potter"},
    {first_name : "George",
    last_name : "Bush"},
    {first_name : "George W",
    last_name : "Bush"},
    {first_name : "Jeb",
    last_name : "Bush"}
]



function multi_key_sort(arr){
    for(var i = arr.length-1; i >= 0; i--){
        console.log(arr)
        for (var k=0; k< i; k++){
            if(arr[k].last_name >=arr[k+1].last_name){
                if(arr[k].last_name !== arr[k+1].last_name || arr[k].first_name > arr[k+1].first_name){
                    let temp = arr[k];
                    arr[k] = arr[k+1];
                    arr[k+1] = temp;
                }
            }
        }
    }
    return arr;
}

multi_key_sort(cheese)