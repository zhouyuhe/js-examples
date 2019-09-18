// var scopes
function someCodeTotRun(){
    var x=13;

    {
        x =1
    }

    console.log(x)

    function somethingOtherFunction(){
        let x=22
        console.log(x)
    }
    somethingOtherFunction()

    console.log(x)
}


someCodeTotRun()

//function and block {} scope
// var is function scope,
function varTest() {
    var x = 1;
    {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }

varTest()
// let is block scope
function letTest() {
    let x = 1;
    {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }
letTest()
//  let, unlike var, does not create a property on the global object.
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined


var Thing;

{
  let privateScope = new WeakMap();
  let counter = 0;

  Thing = function() {
    this.someProperty = 'foo';
    
    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function() {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function() {
    return privateScope.get(this).hidden;
  };
}

console.log(typeof privateScope);
// "undefined"

var thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();