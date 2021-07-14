// Какой будет результат выполнения строк, отмеченных коментариями?
//5
var a = {
    name: 'a',
    foo: function () {
        console.log(this.name);
    }
};

a.foo(); // a

var bar = a.foo;
bar(); // __?

var b = {
    name: 'b'
};
b.foo = a.foo;
b.foo(); // b

var c = {
    name: 'c'
};

bar.call(c); // c



a.foo.apply(b); // 5
a.foo.bind(b).call(c); // 6
a.foo.bind(b).bind(c)(); // 7


