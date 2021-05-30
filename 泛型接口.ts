interface MyArray<T> extends Array<T> {
  first: T | undefined;
  last: T | undefined;
}

const e1: Array<number> = [0, 1, 2];

// 泛型类型别名
type Nullable<T> = T | undefined | null;

type Container<T> = { value: T };

const f: Container<number> = { value: 4 };

const g: Container<string> = { value: "abc" };

// 使用泛型类型别名定义树形结构
type Tree<T> = {
  value: T;
  left: Tree<T> | null;
  right: Tree<T> | null;
}

const tree: Tree<number> = {
  value: 0,
  left: {
    value: 1,
    right: null,
    left: {
      value: 2,
      left: null,
      right: null
    }
  },
  right: {
    value: 3,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: null
    }
  }
}