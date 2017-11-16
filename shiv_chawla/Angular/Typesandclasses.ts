var myNum: number = 5;
var myString: string = "hello universe";
var myArr: number[] = [1, 2, 3, 4, 5];
var myObj: object = { name: "shiv" };
var anythingVariable: any = "hey";
var anythingVariable: any = 25;
var arrayOne: boolean[] = [true, false, true, true];
var arrayTwo: any[] = [1, 'abc', true, 2]
var myObj: object = { x: 5, y: 10 }

interface MyNodeInterface {
    val: number;
    _priv: number;
    doSomething(): void;
}

class MyNode implements MyNodeInterface {
    val;
    _priv;
    constructor(val) {
        this.val = val
    }
    doSomething(): void {//because it doesn't return anything
        this._priv = 10
    }
}

let myNodeInstance = new MyNode(2);
console.log(myNodeInstance.val);

function myFunction(): void{ //because this returns null
    console.log("hello world");
}

function sendingErrors(): never{ //because thisnever returns anything and you dno't want it to ever reach the end of the function
    throw new Error('Error message');
}