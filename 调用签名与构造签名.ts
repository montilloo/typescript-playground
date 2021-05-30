// 如果联合类型中每个成员类型都包含相同参数列表的调用签名，那么联合类型也拥有了该调用签名，其返回值类型为每个成员类型中调用签名返回值类型的联合类型；否则，该联合类型没有调用签名。

interface IT3 {
  (name: string): number;
}

interface IT4 {
  (name: string): bigint;
}

type T8 = IT3 | IT4;
// T8相当于IT3IT4
interface IT3IT4 {
  (name: string): number | bigint;
}

// 同理，如果联合类型中每个成员都包含相同参数列表的构造签名，那么该联合类型也拥有了构造签名，其返回值类型为每个成员类型中构造签名返回值类型的联合类型；否则，该联合类型没有构造签名

interface IT5 {
  new (name: string): Date;
}

interface IT6 {
  new (name: string): Error;
}

type T9 = IT5 | IT6;

interface IT5IT6 {
  new (name: string): Date | Error;
}