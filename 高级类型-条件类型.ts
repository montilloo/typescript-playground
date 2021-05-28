// T extends U ? X : Y
// 如果类型T可以被赋值给类型U，结果类型就是X类型，否则就是Y类型

// 条件类型使类型有了不唯一性，同时也增强了语言的灵活度

type TypeName<T> =
  T extends string ? string :
  T extends number ? number :
  T extends boolean ? boolean :
  T extends undefined ? undefined :
  T extends Function ? Function :
  "object";

type T1 = TypeName<string>;
type T2 = TypeName<string[]>;

// 分布式条件类型，如果T extends U ? X : Y中的T是联合类型的话，那么结果就是多个类型的联合类型
// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)

type T3 = TypeName<string | string[]>;

// 利用这点实现类型的过滤
type Diff<T, U> = T extends U ? never : T;

type T4 = Diff<"a" | "b" | "c", "a" | "e">;
// Diff会被拆解为多个条件类型的联合类型 
// Diff<"a", "a" | "e"> Diff<"b", "a" | "e"> Diff<"c", "a" | "e"> 
// a可以赋值给 a | e,返回never; b不可以赋值给 b | a,返回b;c不可以赋值给a | e，返回c

type NotNull<T> = Diff<T, undefined | null>;
type T5 = NotNull<string | number | boolean | undefined | null>;
// 其实NotNull和Diff已经有内置类型帮助我们实现了，分别是Exclude和NonNullbale
// Extract 是与Exclude相反的操作，抽取出可以赋值给后者的前者中的成员
type T6 = Extract<"a" | "b" | "c", "a" | "e" | "f">;

// ReturnType<T>获取函数返回值的类型
type T7 = ReturnType<() => string>;