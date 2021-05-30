//索引签名包含两种，即字符串索引签名和数值索引签名。


// 如果联合类型中每个成员都包含字符串索引签名，那么该联合类型也拥有了字符串索引签名，字符串索引签名中的索引值类型为每个成员类型中索引值类型的联合类型；否则，该联合类型没有字符串索引签名。

interface IT1 {
  [prop: string]: number;
}

interface IT2 {
  [prop: string]: bigint;
}

type T33 = IT1 | IT2;

interface IT1IT2 {
  [prop: string]: number | bigint;
}



