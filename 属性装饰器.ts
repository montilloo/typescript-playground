// 属性装饰器是在属性声明之前声明的。属性装饰器不能在声明文件或任何其他环境上下文中使用（例如在声明类中）。

// 属性装饰器的表达式将在运行时作为函数调用，带有以下两个参数：
// 1静态成员的类的构造函数，或实例成员的类的原型。
// 2成员的名称

// 由于属性装饰器在 TypeScript 中是如何初始化的，因此没有提供属性描述符作为属性装饰器的参数。这是因为当前没有机制在定义原型成员时描述实例属性，也无法观察或修改属性的初始值设定项。返回值也被忽略。因此，属性装饰器只能用于观察已为类声明了特定名称的属性。

// Reflect Metadata 是 ES7 的一个提案，它主要用来在声明的时候添加和读取元数据。TypeScript 在 1.5+ 的版本已经支持它
import "reflect-metadata";

class Greeter1 {
  @format("Hello, %s")
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    let formatString = getFormat(this, "greeting");
    return formatString.replace("%s", this.greeting);
  }
}
const formatMetadataKey = Symbol("format");
function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}
function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}