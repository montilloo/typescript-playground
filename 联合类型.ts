
// 若联合类型U(Shape)中的每个成员类型都包含一个同名的属性签名M(area)，那么联合类型U(Shape)也包含属性签名M(area)。
interface Circle {
  area: number;
  radius: number;
}

interface Rectangle {
  area: number;
  width: number;
  height: number;
}

type Shape1 = Circle | Rectangle;

declare const s: Shape1;

// 如果联合类型的属性签名在某个成员类型中是可选属性签名，那么该属性签名在联合类型中也是可选属性签名；否则，该属性签名在联合类型中是必选属性签名
interface Circle1 {
  area: bigint;
}

interface Rectangle1 {
  area: number;
}

declare const s1: Circle1 | Rectangle1;
