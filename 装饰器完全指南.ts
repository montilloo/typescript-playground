/*
// 类装饰器
@classDecorator
class Bird {
  // 属性装饰器
  @propertyDecorator
  name: string;

  // 方法装饰器
  @methodDecorator
  fly(
    // 参数装饰器
    @parameterDecorator
    meters: number
  ) {}

  // 访问器装饰器
  @accessorDecorator
  get egg() {}
}
*/

function f123(key: string): any {
  console.log("evaluate: ", key);
  return function () {
    console.log("call: ", key);
  };
}

@f123("Class Decorator")
class C198 {
  @f123("Static Property")
  static prop?: number;

  @f123("Static Method")
  static method(@f123("Static Method Parameter") foo) {}

  constructor(@f123("Constructor Parameter") foo) {}

  @f123("Instance Method")
  method(@f("Instance Method Parameter") foo) {}

  @f123("Instance Property")
  prop?: number;
}
