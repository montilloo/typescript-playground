// ts允许不同诶类型的变量相互赋值

//=============接口之间的兼容===========
interface IX {
  a: any;
  b: any;
}

interface IY {
  a: any;
  b: any;
  c: any;
}

let x: IX = { a: 1, b: 2 };
let y: IY = { a: 1, b: 2, c: 3 };
x = y; // 成员少的可以兼容成员多的
// y = x;

// ==============函数的兼容性===============
type Handler = (a: number, b: number) => void;

function hof(handle: Handler) {
  return handle;
}

//  1.参数个数
let handler1 = (a: number) => {};
let handler2 = (a: number, b: number, c: number) => {};
hof(handler1);
// hof(handler2); // 可以少于源类型，但不能多

// 可选参数和剩余参数
let a1 = (p1: number, p2: number) => {};
let b1 = (p1?: number, p2?: number) => {};
let c1 = (...args: number[]) => {};

a1 = b1;
a1 = c1;
// b1 = a1;
// b1 = c1;
c1 = a1;
c1 = b1;

// 2.参数类型
let handler3 = (a: string) => {};
// hof(handler3); // 类型不兼容

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Point2D {
  x: number;
  y: number;
}

let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};

p3d = p2d;
// p2d = p3d;

// 3.返回值类型。目标函数的返回值类型必须与源函数相同或者为子类型
let f1 = () => ({ name: "a" });
let g1 = () => ({ name: "a", age: 19 });
// f1是目标，g1是源
f1 = g1;
// g1 = f1;

function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {}

// ==============枚举兼容性===================
enum Fruit {
  Apple,
  Banana,
}
enum Color {
  Red,
  Yellow,
}
let fruit: Fruit.Apple = 3;
let co: number = Fruit.Apple;
// let color: Color.Red = Fruit.Apple;

// ===============类的兼容性===================
// 在比较两个类的兼容性的时候静态成员和构造函数是不参与比较的。如果类中有私有成员，这两个类就不兼容了。这时候只有父类和子类之间可以相互兼容。
class A {
  constructor(p: number, q: number) {}

  id: number = 1;

  private name: string = "";
}

class B {
  static s = 1;
  constructor(p: number) {}

  id: number = 2;

  private name: string = "";
}

let aa = new A(1, 2);
let bb = new B(2);

// aa = bb;
// bb = aa;

class C extends A {}

let cc = new C(2, 3);

aa = cc;
cc = aa;

// 泛型兼容性
interface Empty<T> {}

let obj1: Empty<string> = { value: "w" };
let obj2: Empty<number> = { value: 5 };

obj1 = obj2; // 当泛型接口中的T没有被使用的时候，obj1和obj2是兼容的


let log11 = <T>(x: T):T => {
  console.log(x);
  return x;
}

let log12 = <U>(y: U): U => {
  console.log(y);
  return y;
}

log11 = log12; // 如果两个泛型函数的定义相同但是没有指定类型参数，他们之间也是可以相互兼容的。