const obj1 = {bools: [true, false], counter:7}
const obj2 = {bools: [false, true], counter:3}
function incrementToObjCounter(obj){
    const newObj = {
        bools: obj.bools,
        counter : obj.counter + 1
    }
    return newObj
}
const newObj1 = incrementToObjCounter(obj1)
const newObj2 = incrementToObjCounter(obj2)

console.log(obj1,newObj1)
console.log(obj2,newObj2)
// share the same reference
console.log(obj1.bools === newObj1.bools)
console.log(obj2.bools === newObj2.bools)

const str = 'hello'
str[0]= 'j'
//inmutibality of const
console.log(str)
let x = 5
badInc = () => { x = x + 1; return x}
badDbl = () => { x = x * 2; return x}
console.log(badDbl(x) + badInc(x))
console.log(x)
console.log(badInc(x) + badDbl(x))
const obj ={}
const arr = []
const fnc = () => {}
obj.mutated = true
arr.mutated = true
fnc.mutated = true
console.log(obj.mutated,arr.mutated, fnc.mutated)

const objF = {example : 9000}
objF.example++
//freeze so not change
Object.freeze(obj)
objF.example++
console.log(objF.example)

const obj11 = { type: 'data', age: 55 }

const obj22 = { ...obj11, age: obj11.age + 1 } // modified age

console.log(obj11, obj22)

var someString = ' a text message'
function takeStringAndChangeIt(input){
    return input= input + ' another text'
}
someString = takeStringAndChangeIt(someString)
console.log(someString)

var someNumber = 123
var someObject = { field:'value'}
function takeObjectAndChangeIt(input){
    input.someOtherField = 'some other value'
}
takeObjectAndChangeIt(someObject)
console.log(someObject.field)
console.log(someObject.someOtherField)
var someArray = [ 'x', 'y','z']

//{} creat new object, = not create new object
var myObject = {field: 'apple'}
var otherObject = myObject
otherObject.field = 'banana'
console.log(myObject.field)

//immutibility--react and redux

const a = [2,1,4,3]
console.log(a)
// a, b put in same array by sort
const b = a.sort()
console.log(b)
console.log(a)

const houses = ['ac', 'sf','df','sfde','dd']
console.log(houses.slice(0,4))
console.log(houses)

const direwolves = [
    {name:'ad', alive: true},
    {name : 'bss', alive:false},
    {name: 'crw', alive: true}
]

const wolves = direwolves.filter(wolf => wolf.alive)
console.log(wolves)
console.log(direwolves)

const updateHouse = [...houses, 'apple']
console.log(updateHouse)
const try1 = [... houses.slice(0,2),'peach', ... houses.slice(0,5)]
console.log(try1)


const state ={
    name :'cindy',
    occupation : 'IT',
    skills: []
}
const newState = { 
    ...state, 
    occupation : 'changed',
    skills: [ ...state.skills, 'cooking']
}

console.log(state, newState)