// 交叉类型取的是类型之间的并集;适合做对象的混入
 interface DogInterface {
   run(): void;
 }

 interface CatInterface {
   jump(): void;
 }

 let pet: DogInterface & CatInterface = {
   run() {},
   jump() {}
 };

 // 联合类型： 声明的类型并不确定，可以为多个类型中的一个。
 let a11: number | string = "a";

 // 字符串的字面量联合类型
 let b11: "a" | "b" | "c";

 // 数字的字面量联合类型
 let c11 = 1 | 2 | 3;

 // 对象的联合类型
class Dog implements DogInterface{
  run() {};
  eat() {};
}

class Cat implements CatInterface {
  jump() {};
  eat() {};
}


enum Master { Boy, Girl };

function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dog(): new Cat();
}

interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  heigh: number;
}

interface Circle {
  kind: "circle";
  r: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.heigh * s.width;
    case "circle":
      return Math.PI * s.r ** 2;
    default:
      // 检查s是不是never类型，如果是说明之前的判断有遗漏
      return ((e: never) => { throw new Error(e)})(s)
  }
}

console.log(area({ kind: "circle", r: 2 }));