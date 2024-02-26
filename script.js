// ******* map *******

const arr = [1, 2, 3, 5, 6, 7, 8, 9];

Array.prototype.myMap = function (callBackFun) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callBackFun(this[i], i, this));
  }
  return result;
};
let arrMap = arr.myMap((item, index, arr) => item + 4);

console.log(arrMap);

// ******* filter *******

const arr = [1, 2, 3, 5, 6, 7, 8, 9];

Array.prototype.myFilter = function (callBackFun) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callBackFun(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};
let arrFiltered = arr.myFilter((item, index, arr) => item > 30);

console.log(arrFiltered);

// ******* every *******

const arr = [1, 2, 3, 5, 6, 7, 8, 9];
const arr1 = [1, 2];

Array.prototype.myEvery = function (callBackFun) {
  for (let i = 0; i < this.length; i++) {
    if (!callBackFun(this[i], i, this)) {
      return false;
    }
  }
  return true;
};
let arrEvery = arr.myEvery((item,index,arr)=>item>2);

console.log(arrEvery);

const arrIncludes = (array1, array2) =>
  array2.myEvery((item) => array1.includes(item));

console.log(isSubset(arr,arr1));
console.log(isSubset(arr1,arr));

// ******* some *******

const arr = [1, 2, 3, 5, 6, 7, 8, 9];

Array.prototype.mySome = function (callBackFun) {
  for (let i = 0; i < this.length; i++) {
    if (callBackFun(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

let arrSome = arr.mySome((item, index, arr) => item == 3);

console.log(arrSome);

// ******* find *******

const arr = [2, 3, 5, 6, 7, 8, 9];
const person = [
  {
    name: "aaaa",
    age: 26,
  },
  {
    name: "bbb",
    age: 98,
  },
  {
    name: "sdsdsd",
    age: 56,
  },
];

Array.prototype.myFind = function (callBackFun) {
  for (let i = 0; i < this.length; i++) {
    if (callBackFun(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};
let arrFind = arr.myFind((item, index, arr) => item > 4 );
let objFind = person.myFind((item) => item.age < 39);

console.log(arrFind);
console.log(objFind);

// ******* findIndex *******

const arr = [2, 3, 5, 6, 7, 8, 9,20,56];
const person = [
  {
    name: "aaaa",
    age: 26,
  },
  {
    name: "bbb",
    age: 98,
  },
  {
    name: "sdsdsd",
    age: 56,
  },
];

Array.prototype.myFindIndex = function (callBackFun) {
  for (let i = 0; i < this.length; i++) {
    if (callBackFun(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};
let arrFindIndex = arr.myFindIndex((item, index, arr) => item > 6 );
let objFindIndex = person.myFindIndex((item) => item.age < 39);

console.log(arrFindIndex);
console.log(objFindIndex);

// ******* join *******

const arr = [2, 3, 5, 6, 7, 8, 9, 20, 56];
const a = [];

Array.prototype.myJoin = function (prop = ",") {
  if (this.length == 0) {
    return '""';
  }
  let newStr = this[0];

  for (let i = 1; i < this.length; i++) {
    newStr += prop + this[i];
  }

  return newStr;
};

let newStr = arr.myJoin();
let newStr1 = a.myJoin("-");

console.log(newStr);
console.log(newStr1);
