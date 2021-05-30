// 属性签名

interface IA1 {
  a: boolean;
}

interface IB1 {
  b: string;
}

// 若交叉类型的属性签名M在所有成员类型中都是可选属性，那么该属性签名在交叉类型中也是可选属性。
// IA2和IA3的交叉类型为{ x: boolean; y?: string; }
interface IA2 {
  x: boolean;
  y?: string;
}

interface IA3 {
  x?: boolean;
  y?: string;
}

// 索引签名
interface IA4 {
  [prop: string]: string;
}

interface IA5 {
  [prop: number]: string;
}
// 那么，接口类型A和B的交叉类型“A & B”为如下对象类型，它同时包含了字符串索引签名和数值索引签名

/*{
  [prop: string]: string;
  [prop: number]: string;
}*/

// 交叉类型索引签名中的索引值类型为每个成员类型中索引值类型的交叉类型。
interface IA6 {
  [prop: string]: { a: boolean };
}

interface IA7 {
  [prop: string]: { b: boolean };
}

// 那么，接口类型IA6和IA7的交叉类型“IA6 & IA7”为如下对象类型
/*
{
  [prop: string]: { a: boolean } & { b: boolean }
}
*/
// 也等同于
/*{
  [prop: string]: {
    a: boolean;
    b: boolean;
  }
}*/

// 调用签名与构造签名
// 交叉类型中调用签名的顺序与交叉类型类型成员的顺序相同，构造签名同理
interface IA9 {
  (x: number): number;
}

interface IA10 {
  (x: string): string;
}
// 那么交叉类型“IA9 & IA10”为如下对象类型：
/*{
  (x: boolean): boolean;
  (x: string): string;
}*/
