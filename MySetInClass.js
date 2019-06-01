class Sets{
  constructor(isequal, toArray, forEach, clone){
    this.isequal = isequal;
    this.toArray = toArray;
    this.forEach = forEach;
    this.clone = clone;

  }
}
 var a = new Set([1,2,3,4,5]);
 var b = new Set([1,2,8,9,4]);


isSetsEqual = (a, b) => a.size === b.size && [...a].every(value => b.has(value));

console.log(isSetsEqual(a,b))

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));

console.log(animals.slice(2, 4));

console.log(animals.slice(1, 5));

// slice same as toArray??

var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});
//ForEach Works

var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
//this one works as well
