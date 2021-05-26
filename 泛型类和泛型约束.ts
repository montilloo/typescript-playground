class Logger<T> {
  // 静态成员不能引用类型参数
  /*static run(value: T) {
    console.log(value);
    return value;
  }*/

  run(value: T) {
    console.log(value);
    return value;
  }
}

let log1 = new Logger<number>();
log1.run(1);
// 当不指定类型参数的时候value 可以为任务的值
let log2 = new Logger();
log2.run([1,2,3]);


// ==========泛型约束============
// 定义一个带有length属性的接口，让类型参数继承这个接口
interface ILength {
  length: number;
}
function logger<T extends ILength>(value: T): T{
  console.log(value, value.length);
  return value;
}

logger([1]);
logger({ length: 1});
logger("123");
