class Sets{
  constructor (add, remove, size, has){
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.has = has;
  }
  isEqual(other_set){
   if (firstset == other_set){
     console.log('this set ' + this.add + ' contains the same elements');
   } else {
     console.log('this set ' + this.add + ' does not contain the same elements');
   }
  }
  toArray(){
    console.log('this set ' + this.remove + ' is a copy of this array');

  }
  forEach(callback){
    console.log('this set ' + this.size + ' executes each element');
  }
  clone(){
    console.log('this set ' + this.has + ' is an indepent object with the same data');
  }
}
//no errors so far

let firstset = new Sets([1,2,3]);
console.log(firstset);
let other_set = new Sets([1,4,5]);
firstset.isEqual(other_set);

let thirdset = new Sets (["apple", "banana", "grapes"]);
let fourthset = new Sets (["apple", 1, 2, 4]);
thirdset.toArray();

let fifthset = new Sets ([5,6,7]);
fifthset.forEach();

let sixthset = new Sets (["Amy", "Fred", "James"]);
let seventhset = new Sets (["Amy", "Fred", "John"]);
sixthset.clone();
