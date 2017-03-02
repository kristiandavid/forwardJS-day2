function foo(x,y,z,...rest) {
  // throws away y and z, giving you 2,8,10,12 in this example.
  return[ x, ...rest];
}

function bar() {
  var a1 = [ 2, 4 ];
  var a2 = [ 6, 8, 10, 12 ];

  return foo( ...a1, ...a2 );
}

console.log(
  bar().join("") === "281012"
);

console.log(bar());

// -------------
//
// function foo() { }
//
// function bar() {
// 	var a1 = [ 2, 4 ];
// 	var a2 = [ 6, 8, 10, 12 ];
//
// 	return foo();
// }
//
// console.log(
// 	bar().join("") === "281012"
// );
