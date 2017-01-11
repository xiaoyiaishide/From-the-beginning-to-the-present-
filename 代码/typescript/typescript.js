/*一、变量*/

//数字

let num: number = 1;

//布尔

let boo: boolean = true;

//字符串

let str: string  = 'hello ts';
let age: number = 1;
let strIntro: string = `my name is ${age+1}`;//es2015模板字符串

//数组

let arr: number[] = [1, 2, 3];//元素类型后面接上[],表示该类型组成的数组。
let arrF: Array<number> = [1, 2, 3];//数组泛型。

//元组

let x: [string, number];
x = ['hello', 1];//OK
x = [1, 'hello'];//Wrong

//枚举

enum Color (Red, Green, Blue);
let c: Color = Color.Green;

//任意类型：通过编译不对数据类型经行校验

let notSure: any = 4;
notSure = 'haha';

/*空值：void类型和any类型相反，没有任何类型，函数没有返回值的时候可以使用void;将变量声明void只可以赋值为空（undefined、null）*/
let unuseable: void = undefined;

//undefined、null和es里面的用法一样，undefined||null||void统一成strictNullChecks

//Never表示永远都不会存在的值：比如异常

//类型断言

