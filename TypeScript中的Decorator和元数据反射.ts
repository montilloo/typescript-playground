import "reflect-metadata";

function logType(target: any, key: string) {
  var t = Reflect.getMetadata("design:type", target, key);
  console.log(`${key} type: ${t.name}`);
}

class Demo {
  @logType // apply property decorator
  public attr1!: string;
}

function logParamTypes(target: any, key: string) {
  var types = Reflect.getMetadata("design:paramtypes", target, key);
  var s = types.map((a) => a.name).join();
  console.log(`${key} param types: ${s}`);
}  
class Foo {}
interface IFoo {}

class Demo2 {
  @logParamTypes // apply parameter decorator
  doSomething(
    param1: string,
    param2: number,
    param3: Foo,
    param4: { test: string },
    param5: IFoo,
    param6: Function,
    param7: (a: number) => void
  ): number {
    return 1;
  }
}