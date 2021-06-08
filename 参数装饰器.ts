// 参数装饰器是在参数声明之前声明的。参数装饰器应用于类构造函数或方法声明的函数。参数装饰器不能在声明文件、重载或任何其他环境上下文中使用（例如在声明类中）。

// 参数装饰器的表达式将在运行时作为函数调用，带有以下三个参数：
// 1静态成员的类的构造函数，或实例成员的类的原型。
// 2成员的姓名。
// 3函数参数列表中参数的序数索引。

// 参数装饰器只能用于观察已在方法上声明的参数。
// 参数装饰器的返回值被忽略。
import "reflect-metadata";

class BugReport2 {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }

  @validate
  print(@required verbose: boolean) {
    if (verbose) {
      return `type: ${this.type}\ntitle: ${this.title}`;
    } else {
      return this.title;
    }
  }
}

const requiredMetadataKey = Symbol("required");

function required(
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  let existingRequiredParameters: number[] =
    Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata(
    requiredMetadataKey,
    existingRequiredParameters,
    target,
    propertyKey
  );
}

function validate(
  target: any,
  propertyName: string,
  descriptor: TypedPropertyDescriptor<Function>
) {
  let method = descriptor.value!;

  descriptor.value = function () {
    let requiredParameters: number[] = Reflect.getOwnMetadata(
      requiredMetadataKey,
      target,
      propertyName
    );
    if (requiredParameters) {
      for (let parameterIndex of requiredParameters) {
        if (
          parameterIndex >= arguments.length ||
          arguments[parameterIndex] === undefined
        ) {
          throw new Error("Missing required argument.");
        }
      }
    }
    return method.apply(this, arguments);
  };
}