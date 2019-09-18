// function init(){
//     var name = 'cindy'
//     function displayName(){
//         alert(name);
//     }
//     displayName();
// }
// init()

function makeAdder(x){
    return function(y){
        return x + y
    }
}
var add5=makeAdder(5)
var add11=makeAdder(11)
console.log(add5(2))
console.log(add11(34))

var counter = (function(){
    var privateCounter = 0
    function changeBy(val){
        //x+=y ===x=x+y
        privateCounter += val;
    }
    return{
        // use , to return more than one terms
        increment: function(){
            changeBy(1)
        },
        decrement: function(){
            changeBy(-1)
        },
        value: function() {
            return privateCounter
        }
    }
})()

console.log(counter.value())
// do it twice
counter.increment()
counter.increment()
console.log(counter.value())
counter.decrement()
counter.decrement()
counter.decrement()
console.log(counter.value())

var e=10
function sum(a){
    return function(b){
        return function(c){
            return function(d){
                return a + b + c + d + e
            }
        }
    }
}
console.log(sum(1)(2)(3)(4))

var e = 10;
function sum(a){
  return function sum2(b){
    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

var s = sum(1)
var s1 = s(2)
var s2 = s1(3)
var s3 = s2(6)
console.log(s3)