// 映射对象类型是一种独特的对象类型，它能够将已有的对象类型映射为新的对象类型。

type K = "x" | "y";
type T = number;

type MappedObjectType = { readonly [P in K]?: T };

// 映射对象类型MappedObjectType相当于如下对象类型
/*{
  readonly x?: number;
  readonly y?: number;
}*/

// 映射对象类型的详细运算步骤
// 首先要强调的是，类型K必须能够赋值给联合类型“string |number | symbol”。

// 若当前遍历出来的类型成员P为字符串字面量类型，则在结果对象类型中创建一个新的属性成员，属性名类型为该字符串字面量类型且属性值类型为T
// { x: boolean }
type MappedObjectType1 = { [P in "x"]: boolean };

// 若当前遍历出来的类型成员P为数字字面量类型，则在结果对象类型中创建一个新的属性成员，属性名类型为该数字字面量类型且属性值类型为T
// { 0: boolean }
type MappedObjectType2 = { [P in 0]: boolean };

// 若当前遍历出来的类型成员P为“unique symbol”类型，则在结果对象类型中创建一个新的属性成员，属性名类型为该“uniquesymbol”类型且属性值类型为T。
const s111: unique symbol = Symbol();

// { [s111]: boolean }
type MappedObjectType3 = { [P in typeof s111]: boolean };

// 若当前遍历出来的类型成员P为string类型，则在结果对象类型中创建字符串索引签名。
// { [x: string]: boolean }
type MappedObjectType4 = { [P in string]: boolean };

// 若当前遍历出来的类型成员P为number类型，则在结果对象类型中创建数值索引签名。
// { [x: number]: boolean }
type MappedObjectType5 = { [P in number]: boolean };
