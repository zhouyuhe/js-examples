var test = {
    prop : 42,
    func : function () {
        return this.prop;
    },
}
console.log(test.func())

console.log(this)

//global context
a = 37;
console.log(global.a)

// this.b = 'MDN'
// console.log(b)
// console.log(global.b)

//function context
function f1(){
    return this;
    
}
console.log(f1())

//In strict mode, if the value of this is not set when entering an execution context, it remains as undefined
function f2() {
    'use strict'
    return this;
}
console.log(f2())

var obj = { a: 'custom'}
var a = 'global'
function whatsThis(){
    return this.a;
}
console.log(whatsThis())
console.log(whatsThis.call(obj))
console.log(whatsThis.apply(obj))

function add (c,d){
    return this.a + this.b + c + d
}
var o = { a:1, b:3}
console.log(add.call(o,5,7))
console.log(add.apply(o,[10,15]))


function bar(){
    console.log(Object.prototype.toString.call(this))
}
console.log(bar.call(7))
console.log(bar.call('foo'))

function f(){
    return this.a
}
var g=f.bind({a:'amazing'})
console.log(g())
var h=g.bind({a:'hello'})
// bind only work once!!!
console.log(h())
var m= {a:37,f:f, g:g, h:h}
console.log(m.a, m.f(), m.g(), m.h())

// In arrow functions, this retains the value of the enclosing lexical context's this. In global code, it will be set to the global object:
var globalObject = this
var foo = (() => this)
console.log( foo() === globalObject)

var obj = { func: foo}
console.log(obj.func() === globalObject)
console.log(foo.call(obj) === globalObject)
foo = foo.bind(obj)
console.log(foo() === globalObject)

var obj = {
    bar : function() {
        var x =( () => this)
        return x
    }
}

var fn = obj.bar()
console.log(fn() === obj)
var fn2 = obj.bar
console.log(fn2()() === global)

var o = {
    prop: 37,
    f: function() {
      return this.prop;
    }
  };
  
  console.log(o.f());

  function sum() {
    return this.a + this.b + this.c;
  }
  
  var o = {
    a: 1,
    b: 2,
    c: 3,
    get average() {
      return (this.a + this.b + this.c) / 3;
    }
  };

  Object.defineProperty(o, 'sum', {
      get: sum, enumerable: true, configurable: true
  })
console.log(o.average, o.sum)

function C(){
    this.a =37
}
var o = new C()
console.log(o.a)

function C2(){
    this.a = 37
    return {a: 28}
}
o= new C2()
console.log(o.a)