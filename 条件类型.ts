// 条件类型的定义借用了JavaScript语言中的条件运算符，语法如下所示：

// T extends U ? X : Y;

// 分布式行为
// 与常规条件类型相比，分布式条件类型具有一种特殊的行为，那就是在使用实际类型参数实例化分布式条件类型时，如果实际类型参数T为联合类型，那么会将分布式条件类型展开为由子条件类型构成的联合类型。
/*
type T = A | B;

T extends U ? X : Y === ( A extends U ? X : Y) | (B extends U ? X : Y)
*/


type T555 = Exclude<string | undefined, null | undefined>;

// 可以通过如下方式将此例中的分布式条件类型转换为非分布式条件类型
type CT<T> = [T] extends [string] ? true : false;

type T4443 = CT<string | number>;

type An = Record<K, T>;