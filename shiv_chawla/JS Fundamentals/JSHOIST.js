/* var hello = 'world'; // if you put this variable on top, then it works
console.log(hello); //the variable is declared AFTER the console.log thus it doesn't say anything
 */

/* var needle = 'haystack';
test();//because the function is getting called and printing "needle" after it gets set to "magnet "WITHIN the functino


function test(){
	var needle = 'magnet';
	console.log(needle);
} */
/* var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}//that function is never called so nothing prints
console.log(brendan);//the global scope brendan will play */

/* var food = 'chicken';
console.log(food);//because the global variable is still CHICKEN
eat();
function eat(){
	food = 'half-chicken';
	console.log(food); //this is the variable in the function eat that gets printed
	var food = 'gone';
} */

/* mean();//returns an error because the var mean was not declared earlier
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food); */

/* console.log(genre); //prints undefined
var genre = "disco"; //now you set it to disco
rewind(); //function prints rock and r&b
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre); */ //prints disco again

dojo = "san jose";
console.log(dojo); //prints san jose
learn(); //runs the function and prints seattle and burback
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo); //then prints san jose again