// 将映射对象类型与索引类型查询结合使用就能够遍历已有对象类型的所有属性成员，并使用相同的属性来创建一个新的对象类型

type T21 = { a: string; b: number };

// { a: boolean; b: boolean }
type M = { [P in keyof T21]: boolean };

// 将映射对象类型、索引类型查询以及索引访问类型三者结合才能够最大限度地体现映射对象类型的威力。我们不再使用固定的类型，例如boolean。借助于类型变量P和索引访问类型，我们能够动态地获取对象类型T中每个属性的类型

// { a: string; b: number }
type M1 = { [P in keyof T21]: T21[P] };

// 将某个对象类型的所有属性成员修改为可选属性

type OptionalT21 = { [P in keyof T21]?: T21[P] };
// 仅在映射对象类型中添加了“?”修饰符就实现了这个功能。由于这个功能十分常用，所以TypeScript内置了一个工具类型“Partial<T>”来实现这个功能

/**
 * 将T中的所有属性标记为可选属性
 */
type PartialT21<T> = {
  [P in keyof T]?: T[P];
};

// 接下来，我们再创建一个对象类型，将已有对象类型中所有属性标记为只读属性
// { readonly a: string; readonly b: number;}
type ReadonlyT21 = { readonly [P in keyof T21]: T21[P] };

/**
 * 将T中的所有属性标记为只读属性
 */
type ReadonlyT211<T> = {
  readonly [P in keyof T]: T[P];
};

