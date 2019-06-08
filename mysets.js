class Sets{
  constructor (add, remove, size, has){
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.has = has;
  }
  isEqual(other_set){
   console.log('this set' + this.add + 'contains the same elements');
  }
  toArray(){
    console.log('this set' + this.remove + 'is a copy of this array');

  }
  forEach(callback){
    console.log('this set' + this.size + 'executes each element');
  }
  clone(){
    console.log('this set' + this.has + 'is an indepent object with the same data');
  }
}
//no errors so far

let firstset = new Set([1,2,3]);
console.log(firstset);
let other_set = new Set([1,4,5]);
firstset.isEqual(other_set);

let thirdset = new Set ([apple, banana, grapes]);
let fourthset = new Set ([apple, 1, 2, 4]);
thirdset.toArray();

let fifthset = new Set ([5,6,7]);
fifthset.forEach(callback);

let sixthset = new Set ([Amy, Fred, James]);
let seventhset = new Set ([Amy, Fred, John]);
sixthset.clone();
