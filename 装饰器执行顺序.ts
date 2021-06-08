// Decorator Evaluation
// Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each instance member.每个实例成员都应用参数装饰器，然后是方法、访问器或属性装饰器。
// Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each static member.每个静态成员都应用参数装饰器，然后是方法、访问器或属性装饰器。
// Parameter Decorators are applied for the constructor.参数装饰器应用于构造函数。
// Class Decorators are applied for the class.类装饰器应用于类。

function first() {
  console.log("first(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("first(): called");
  };
}

function second() {
  console.log("second(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("second(): called");
  };
}

class ExampleClass {
  @first()
  @second()
  method() {}
}
