// Какой будет результат выполнения строк, отмеченных комментариями?

var a = {
    name: 'a',
    foo: function () {
        console.log(this.name);
    }
};

a.foo(); // __?

var bar = a.foo;
bar(); // __?

var b = {
    name: 'b'
};
b.foo = a.foo;
b.foo(); // __?

var c = {
    name: 'c'
};

bar.call(c); // __?


a.foo.apply(b); // __?
a.foo.bind(b).call(c); // __?
a.foo.bind(b).bind(c)(); // __?


