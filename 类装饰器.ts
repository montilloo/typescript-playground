// 类装饰器是在类声明之前声明的。类装饰器应用于类的构造函数，可用于观察、修改或替换类定义。
// 类装饰器不能在声明文件或任何其他环境上下文中使用（例如在声明类上）。
// 类装饰器的表达式将在运行时作为函数调用，装饰类的构造函数作为其唯一参数。
// 如果类装饰器返回一个值，它将用提供的构造函数替换类声明。

@sealed
class BugReport {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
// 当@sealed 被执行时，它将密封构造函数及其原型，这将不允许在运行时对类进行子类化。