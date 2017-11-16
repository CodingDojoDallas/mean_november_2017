let myNum: number = 5;
let myString: string = 'Hello Universe';
let myArr: number[] = [1, 2, 3, 4];
interface myObjInterface {
    name?: string;
    x?: number;
    y?: number;
}
let myObj: myObjInterface = { name: "bill" };
let anythingVariable: any = 'Hey';
anythingVariable = 25;
let arrayOne: boolean[] = [true, false, true, true];
let arrayTwo: any[] = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };
//object constructor
interface MyNodeInterface {
    // something(callback: object): object;
    val: number;
    _priv: number;
    doSomething(): void;
}
class MyNode implements MyNodeInterface {
    val;
    _priv;
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

function myfunction(): void {
    console.log('hello world')
    return;
}

function sendingErrors(): never {
    throw new Error('Error message');
}

// myNum = 5;
// myString = "Hello Universe";
// myArr = [1,2,3,4];
// myObj = { name:'Bill'};
// anythingVariable = "Hey";
// anythingVariable = 25;
// arrayOne = [true, false, true, true];
// arrayTwo = [1, 'abc', true, 2];
// myObj = { x: 5, y: 10 };
// // object constructor
// MyNode = (function () {
//     function MyNode(val) {
//         this.val = 0;
//         this.val = val;
//     }
//     MyNode.prototype.doSomething = function () {
//         this._priv = 10;
//     };
//     return MyNode;
// }());
// myNodeInstance = new MyNode(1);
// console.log(myNodeInstance.val);
// function myFunction() {
//     console.log("Hello World");
//     return;
// }
// function sendingErrors() {
// 	throw new Error('Error message');
// }
