// TypeScript同样支持声明具有块级作用域的局部类型

// ▪局部枚举类型。
// ▪局部类类型。
// ▪局部接口类型。
// ▪局部类型别名。

function f21<T>() {
  enum E {
    A,
    B,
  }

  class C {
    x: string | undefined;
  }

  interface I<T> {
    x: T;
  }

  type A = E.A | E.B;
}

// 类似于let声明和const声明，局部类型拥有块级作用域。
// 这两个接口A不会相互影响，并且if分支中的代码也无法引用else分支中的接口A
function f13(condition: boolean) {
  if (condition) {
    interface A {
      x: number;
    }

    const v: A = { x: 10 };
  } else {
    interface A {
      x: string;
    }

    const v: A = { x: "xx" };
  }
}
