// 映射对象类型是一种独特的对象类型，它能够将已有的对象类型映射为新的对象类型。

type K = "x" | "y";
type T = number;

type MappedObjectType = { readonly [P in K]?: T };

// 映射对象类型MappedObjectType相当于如下对象类型
/*{
  readonly x?: number;
  readonly y?: number;
}*/
