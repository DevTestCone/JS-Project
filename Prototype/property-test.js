let o = {
  a:5
};

Object.defineProperty(o, 'a', {
  //value: 37,
  writable: false,
  enumerable: true,
  configurable: true
});

o.a = 7; //
console.log(o.a); // 37 if  //value:37  then log ( 5 );

console.log("a" in o); // true
console.log("b" in o); // false

console.log(o.hasOwnProperty("a")); //true
console.log(o.hasOwnProperty("b")); //false

//******************************************************************************

let x = {
  a:5,
  b:10
};

Object.defineProperty(x, 'a', {
  //value: 37,
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(x, 'b', {
  //value: 37,
  writable: true,
  enumerable: false, // no for loop
  configurable: true
});

console.log(x.b); // 10

for (let k in x) {
  console.log(k,": " + x[k]); // a:5 ther is no b
}

console.log(Object.getOwnPropertyNames(x)); // ["a","b"]
//******************************************************************************

let anotherObject = {
  o:3
}

let myObject = Object.create(anotherObject);

for (var k in myObject) {
  console.log(k,": " + myObject[k]);
}

console.log("o" in myObject); // true

console.log(myObject.hasOwnProperty("o")); // false ???
myObject.o++;
console.log(myObject.o); //4
console.log(myObject.hasOwnProperty("o")); // true :D
//******************************************************************************
