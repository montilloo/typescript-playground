// 将源对象类型T中的属性一一对应地映射到新的对象类型中。映射后的对象类型结构与源对象类型T的结构完全一致，我们将这种映射对象类型称为同态映射对象类型

// 将源对象类型T中的属性一一对应地映射到新的对象类型中。映射后的对象类型结构与源对象类型T的结构完全一致，我们将这种映射对象类型称为同态映射对象类型
// 同态映射对象类型的一个重要性质是，新的对象类型会默认拷贝源对象类型中所有属性的readonly修饰符和“?”修饰符
// HMOT是同态映射对象类型，它将源对象类型T的所有属性映射到新的对象类型HMOT，同时保留了每个属性的修饰符。

type T333 = { a?: string; readonly b: number };
// {a?: string; readonly b: number }
type HMOT = { [P in keyof T333]: T333[P] };

type KKK = keyof T333;
type MOT = { [P in KKK]: T333[P] };

// 不论是同态映射对象类型的修饰符拷贝规则还是改进的映射对象类型修饰符拷贝规则，它们都无法删除属性已有的修饰符。因此，TypeScript引入了两个新的修饰符用来精确控制添加或移除映射属性的“?”修饰符和readonly修饰符

type T444 = {
  a?: string | undefined | null;
  readonly b: number | undefined | null;
};

type RequiredT = Required<T444>;


// 若T为原始类型，则不进行任何映射，同态映射对象类型“HMOT<T, X>”等于类型T。
type HMOT1<T, X> = { [P in keyof T]: X};

type T999 = string;

type R = HMOT1<T999, boolean>;

// 若T为联合类型，则对联合类型的每个成员类型求同态映射对象类型，并使用每个结果类型构造一个联合类型

type HMOT2<T, X> = { [P in keyof T]: X};

type T888 = {a: string} | { b: number};

type R2 = HMOT2<T888,boolean>; 

type T777 = keyof [string, number];