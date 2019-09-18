var original = [true, true, undefined, false,null]
//slice can cope the array
var copy1 = original.slice(0)
//spread operator, spread that into the new array
var copy2 = [...original]

//deep copying array of array or object of array
var deepArray = [['free']]
var shallowCopy = deepArray.slice(0)
//add them together
shallowCopy[0].push('is good?')

var deepCopy = JSON.parse(JSON.stringify(deepArray))

deepCopy[0].push('is good?')
console.log(deepArray[0],deepCopy[0])