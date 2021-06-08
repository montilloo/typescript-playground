// 方法装饰器是在方法声明之前声明的。装饰器应用于方法的属性描述符，可用于观察、修改或替换方法定义。方法装饰器不能在声明文件、重载或任何其他环境上下文中使用（例如在声明类中）。
// 方法装饰器的表达式将在运行时作为函数调用，带有以下三个参数：
// 1静态成员的类的构造函数，或实例成员的类的原型。
// 2成员名称。
// 3成员的属性描述符

// 如果方法装饰器返回一个值，它将用作该方法的属性描述符。
function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}

const greeter = new Greeter("原始消息");
greeter.greet();
for (const key in greeter) {
  console.log(`${key}可以被枚举到`);
}
