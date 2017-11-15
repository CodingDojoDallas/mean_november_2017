var myNum: number = 7;
var myString: String = "Hello Universe";
var myArr: number[] = [1,2,3,4];
type myObj = {name:String;}
var myObj: myObj ={ name:'Bill'};
var anythingVariable: any = "Hey";
anythingVariable = 25; 
var arrayOne: boolean[] = [true, false, true, true]; 
var arrayTwo: any[] = [1, 'abc', true, 2];
type myObj1 = {x:number; y:number;}
var myObj1: myObj1 = { x: 5, y: 10 };

// object constructor
class MyNode {
    val: number;
    private _priv: number;

    constructor(value:number){
        this.val = value;
    }
    doSomething(){
        this._priv = 10;
    }
}

let myNodeInstance = new MyNode(1);

console.log(myNodeInstance.val);

function myFunction(): void{
    console.log("Hello World");
    return;
}