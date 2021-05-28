interface AA {
  x: number;
  foo(bar: number): number;
  foo(bar: "a"): number;
}

interface AA {
  y: number;
  foo(bar: string): string;
  foo(bar: number[]): number[];
  foo(bar: "b"): number;
}
// 以上两个接口会合并为一个接口，哪怕他们不在同一个文件中

let z: AA = {
  x: 1,
  y: 2,
  foo(bar: any): any {
    return bar;
  },
};

// 对于非函数成员，定义相同的名字和类型是可以的，但是不能名字一致类型不一致
/*
interface AA {
  x: number;
  y: string;
}

interface AA {
  y: number;
}
*/

// 对于函数成员，每个相同名字的成员都会成为一个重载。拥有字符串字面量类型参数会被提升到整个函数声明的最顶端。

// 命名空间的合并
// 命名空间和函数的合并
function Lib() {}
namespace Lib {
  export let version = "1.0";
}

console.log(Lib.version);
// 命名空间和类的合并,相当于给类添加了静态属性
class CC {}
namespace CC {
  export let state = 1;
}

console.log(CC.state);
// 命名空间和枚举的合并,相当于给枚举增加了一个方法
enum Color {
  Orange,
  Green,
  Blue,
}
namespace Color {
  export function mix() {}
}

console.log(Color);

// 注意：函数和类与命名空间的前后次序不可颠倒(命名空间声明不能位于与之合并的类或函数前 | 命名空间声明不能位于与之合并的类或函数前)，但是枚举和命名空间的前后次序无所谓
