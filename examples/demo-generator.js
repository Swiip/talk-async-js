function *foo() {
  yield 1;
  yield 2;
  yield 3;
}

var it = foo();
console.log( it.next() ); // { value:1, done:false }
console.log( it.next() ); // { value:2, done:false }
console.log( it.next() ); // { value:3, done:false }
console.log( it.next() ); // { value: undefined, done: true }
