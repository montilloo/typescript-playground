// 对于一个对象而言，我们可以使用属性名作为索引来访问属性值。相似地，对于一个对象类型而言，我们可以使用属性名作为索引来访问属性类型成员的类型。TypeScript引入了两个新的类型结构来实现索引类型：▪索引类型查询。▪索引访问类型。

// 通过索引类型查询能够获取给定类型中的属性名类型。索引类型查询的结果是由字符串字面量类型构成的联合类型，该联合类型中的每个字符串字面量类型都表示一个属性名类型

interface Point {
  x: number;
  y: number;
}

type T12 = keyof Point;

interface IB1 {
  [prop: string]: number;
}

type KeyOfIB1 = keyof IB1;

const s11: unique symbol = Symbol();

interface IB2 {
  [s11]: boolean;
}

type KeyOfIB2 = keyof IB2;