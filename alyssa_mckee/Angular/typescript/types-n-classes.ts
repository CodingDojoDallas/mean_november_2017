let myNum :number = 5;
let myString :string = "Hello Universe";
let myArr :number[]= [1,2,3,4];
let myObj :object = { name:'Bill'};
let anythingVariable :any = "Hey";
anythingVariable = 25; 
let arrayOne :boolean[]= [true, false, true, true]; 
let arrayTwo :any[] = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };

interface myNodeInterface {
    val: number
    _priv?: number
}
class MyNode implements myNodeInterface {
    val;
    _priv;
    constructor(val: number) {
        this.val = 0;
        this.val = val;
    }
    doSomething() :void {
        this._priv = 10;
    }
 } 

let myNodeInstance :MyNode = new MyNode(1);
console.log(myNodeInstance.val);


function myFunction() :void {
    console.log("Hello World");
    return;
}
function sendingErrors() :never {
	throw new Error('Error message');
}