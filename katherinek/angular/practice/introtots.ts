let myNum: number = 5;
let myString: string = "Hello Universe";
let myArr: number[] = [1, 2, 3, 4];
var myObj: object = { name: "bill" };
var anythingVariable: any = "Hey";
anythingVariable = 25;
var arrayOne: boolean[] = [true, false, true, true];
var arrayTwo: any[] = [1, "abc", true, 2];
myObj = { x: 5, y: 10 };

// 
class myNode {
    val: number;

    constructor(val: number){
        this.val = val; 
    }
    doSomethingFun() {
        console.log("Something fun");
    }    
}


var node = new myNode(1)

function myFunction(): void {
    console.log('hello world');
    return;
}

function sendingError(): never {
    throw new Error('Error message');
}
    