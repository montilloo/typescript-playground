// 通过映射类型可以从一个旧的类型变为新的类型

interface Obj1 {
  a: string;
  b: number;
  c: boolean;
}
// ts内置的泛型接口，接口的名称是readonly,接口传入的类型是Obj1
// 这一步将每个成员都变成了只读
type ReadonluObj1 = Readonly<Obj1>;

// ts内置了很多的映射类型
// 将接口所有的属性变为可选的
type PartialObj1 = Partial<Obj1>;
// 抽取Obj1的子集
type PickObj1 = Pick<Obj1, "a" | "b">;
// Record会创建新的
type RecordObj = Record<'x' | 'y', Obj1>;

