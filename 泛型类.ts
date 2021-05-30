class Container1<T> {
  // static version: T; // 泛型类描述的是类的实例类型。因为类的静态成员是类构造函数类型的一部分，所以泛型类型参数不能用于类的静态成员
  constructor(private readonly data: T) {}
}

const container1 = new Container1<boolean>(true);

const container2 = new Container1<number>(0);

// 上例中，我们使用的是类声明，另一种定义类的方式是类表达式。

const Container3 = class<T> {
  constructor(private readonly data: T){};
};

const container4 = new Container3<boolean>(false);

const container5 = new Container3<number>(0);


interface IA<T>{
  a: T;
}

class Base<T> {
  b?: T;
}

class Derived<T> extends Base<T> implements IA<T> {
  constructor(public readonly a: T) {
    super();
  }
}