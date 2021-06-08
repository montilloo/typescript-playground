// 访问器装饰器是在访问器声明之前声明的。访问器装饰器应用于访问器的属性描述符，可用于观察、修改或替换访问器的定义。不能在声明文件或任何其他环境上下文中使用访问器装饰器（例如在声明类中）。
// TypeScript 不允许同时修饰单个成员的 get 和 set 访问器。相反，成员的所有装饰器必须应用于按文档顺序指定的第一个访问器。这是因为装饰器适用于属性描述符，它结合了 get 和 set 访问器，而不是单独的每个声明。

// 访问器装饰器的表达式将在运行时作为函数调用，具有以下三个参数：
// 1静态成员的类的构造函数，或实例成员的类的原型。
// 2成员的名称。
// 3成员的属性描述符。

// 如果访问器装饰器返回一个值，它将用作成员的属性描述符。
function configurable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.configurable = value;
  };
}

class Point {
  public _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @configurable(true)
  get x98() {
    return this._x;
  }

  @configurable(false)
  get y98() {
    return this._y;
  }
}

const point = new Point(10, 29);

console.log(point.x98);
