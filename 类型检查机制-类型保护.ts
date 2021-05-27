// 不知道程序在运行时到底输入了怎么样的参数，所以必须要在每一处添加类型断言。代码可读性差，类型保护机制就是解决这个问题，可以提前对类型作出预判。

// 什么是类型保护机制？
// Typescript能够在特定的区块中保证变量属于某种确定的类型。可以在此区块中放心的引用此类型的属性，或者调用此类型的方法。

enum Type {
  Strong,
  Weak,
}

class Java {
  helloJava() {
    console.log("Hello Java");
  }
  java: any;
}

class JavaScript {
  helloJavaScript() {
    console.log("Hello JavaScript");
  }
  javascript: any;
}

function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined;
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();
  // 类型断言，可读性差
  /*if((lang as Java).helloJava) {
    (lang as Java).helloJava();
  } else {
    (lang as JavaScript).helloJavaScript();
  }*/
  // 使用instance of 判断区块属于某种特定的类型。代码简介，而且编辑器非常智能
  if (lang instanceof Java) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }
  // 使用 in 判断属性是不是在对象中，进而判断区块属于某种特定的类型
  if ("java" in lang) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }
  // 使用 typeof 可以判断基本类型
  if (typeof x === "string") {
    x.length;
  } else {
    x.toFixed(2);
  }
  // 通过创建类型保护的函数
  if (isJava(lang)) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }
  return lang;
}

getLanguage(Type.Strong, 1);
