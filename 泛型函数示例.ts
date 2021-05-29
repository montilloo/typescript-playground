function f0<T>(x: T): T {
  return x;
}

const a111: string = f0<string>("a");

const b111: number = f0<number>(1);

function f11<T>(x: T, y: T): T[] {
  return [x, y];
}

const a1111: number[] = f11<number>(4,5);

const b1111: boolean[] = f11<boolean>(true, false);


// f12函数接受两个不同类型的参数，并且返回值类型为对象类型。返回值对象类型中x属性的类型与参数x类型相同，y属性的类型与参数y类型相同。
function f12<T,U>(x: T, y: U): { x: T; y: U} {
  return { x, y};
}

const a11111: { x: string, y: number} = f12<string, number>("a", 2);

const b11111: {x: string, y: string} = f12<string,string>("a", "b");

function f13<T,U>(a: T[], f: (x: T) => U): U[] {
  return a.map(f);
}

const d: boolean[] = f13<number, boolean>([0,1,2], n => !!n);

const e = f0("d");
