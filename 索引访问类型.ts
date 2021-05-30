// 结合使用索引类型查询和索引访问类型就能够实现类型安全的对象属性访问操作

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

interface Circle11 {
  kind: "circle";
  radius: number;
}

function f22(circle: Circle11) {
  const kind = getProperty(circle, "kind");

  const radius = getProperty(circle, "radius");
}
