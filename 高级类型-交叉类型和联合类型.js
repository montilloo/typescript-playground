var pet = {
    run: function () { },
    jump: function () { }
};
// 联合类型： 声明的类型并不确定，可以为多个类型中的一个。
var a11 = "a";
// 字符串的字面量联合类型
var b11;
// 数字的字面量联合类型
var c11 = 1 | 2 | 3;
// 对象的联合类型
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.run = function () { };
    ;
    Dog.prototype.eat = function () { };
    ;
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.jump = function () { };
    ;
    Cat.prototype.eat = function () { };
    ;
    return Cat;
}());
var Master;
(function (Master) {
    Master[Master["Boy"] = 0] = "Boy";
    Master[Master["Girl"] = 1] = "Girl";
})(Master || (Master = {}));
;
function getPet(master) {
    var pet = master === Master.Boy ? new Dog() : new Cat();
}
function area(s) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.heigh * s.width;
        default:
            break;
    }
}
console.log(area({ kind: "circle", r: 2 }));
