//var myObject = {value: 100};
//myObject.getValue = function () {
//console.log(this.value);  // 输出 100

//  // 输出 { value: 100, getValue: [Function] }，
// // 其实就是 myObject 对象本身
// console.log(this);

//  return this.value;
//};

//console.log(myObject.getValue()); // => 100

/*
var myObject = {value: 100};
myObject.getValue = function () {
  var foo = function () {
    console.log(this.value) // => undefined
    console.log(this);// 输出全局对象 global
  };

  foo();

  return this.value;
};

console.log(myObject.getValue()); // => 100

var SomeClass = function(){
  this.value = 100;
}

var myCreate = new SomeClass();

console.log(myCreate.value); // 输出100
*/



var myObject = {value: 100};

var foo = function(){
  console.log(this);
};

foo(); // 全局变量 global
foo.apply(myObject); // { value: 100 }
foo.call(myObject); // { value: 100 }

var newFoo = foo.bind(myObject);
newFoo(); // { value: 100 }