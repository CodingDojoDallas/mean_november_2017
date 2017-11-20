let myNum: number =5;
let myString: string = "Hello Universe";
let myArr: number[] = [1,2,3,4];
let myObj: myObj = {name: 'Bill'};
var anythingVariable: any = "Hey";
var anythingVariable: any = 25;
var arrayOne: Array<boolean> = [true, false, true, true];
var arrayTwo: Array<any> = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };

// object constructor
interface myObj {
    name?: string,
    x?: number,
    y?: number
}

class MyNode {
    val: number;
    _priv: number;
    constructor(val: number) {
        this.val = 0;
        this.val = val;
    }
    doSomething() {
        this._priv = 10;
    }
}

let myNodeInstance: MyNode = new MyNode(1);
console.log(myNodeInstance.val);

function myfunction() {
    console.log("Hello World");
    return;
}

function sendingErrors(): never {
	throw new Error('Error message');
}
