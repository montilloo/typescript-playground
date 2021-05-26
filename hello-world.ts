function log<T>(value: T): T{
  console.log(value);
  return value;
}

log<string[]>(["1"]);
log(["a", "b"]);


// type Log = <T>(value: T) => T;

interface Log<T = string> {
  <T>(value: T): T;
}

