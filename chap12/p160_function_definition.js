var a = function add(x, y) {
	return x + y;
}

console.log(a(2,5));				// 7
// console.log(add(2,5));		// ReferenceError: add is not defined


// 함수 리터럴에서 함수이름은 함수 몸체 내부에서만 참조 가능한 식별자이다.
var f = function foo() { console.log(foo); };
f();
// foo();										// ReferenceError: foo is not defined
