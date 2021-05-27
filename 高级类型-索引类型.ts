// 索引类型可以实现对对象属性的查询和访问，再配合泛型约束就能够建立对象、对象属性以及属性值之间的约束关系

let obj = {
  a: 1, 
  b: 2,
  c: 3
};

function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key]);
}

console.log(getValues(obj, ["a", "b"]));
// console.log(getValues(obj, ["e", "f"]));

// 索引类型的查询操作符 keyof T ，含义是： 表示类型T的所有公共属性的字面量联合类型
interface Obj {
  a: number;
  b: string;
}

let key: keyof Obj;

// T[K] 对象T的属性K所代表的类型
let value: Obj["a"];

// T extends U  泛型约束