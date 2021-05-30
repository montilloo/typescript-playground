// 联合类型表示一个值的类型为多种类型之一，而交叉类型则表示一个值同时属于多种类型。

interface Clickable {
  click(): void;
}

interface Focusable {
  focus(): void;
}

type T10 = Clickable & Focusable;

// 若一个值既是Clickable类型又是Focusable类型，那么我们说该值的类型为交叉类型“Clickable & Focusable”。它表示既可以点击又可以获得焦点的对象。




// 交叉类型通常与对象类型一起使用。虽然在交叉类型中也允许使用原始类型成员，但结果类型将成为never类型
// 类型T是boolean、number和string类型组成的交叉类型。根据交叉类型的定义，若一个值是T类型，那么该值既是boolean类型，又是number类型，还是string类型。显然，不存在这样一个值，所以T类型为never类型。
type T11 = boolean & number & string;
