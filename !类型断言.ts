// 非空类型断言运算符“!”是TypeScript特有的类型运算符，它是非空类型断言的一部分。非空类型断言能够从某个类型中剔除undefined类型和null类型

// 当编译器遇到非空类型断言时，就会无条件地相信表达式的类型不是undefined类型和null类型。因此，不应该滥用非空类型断言，应当只在确定一个表达式的值不为空时才使用它，否则将存在安全隐患。