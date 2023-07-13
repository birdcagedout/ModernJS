var first = '김';
var last = '재형';
console.log(`name: ${first} ${last}`);	// interpolation ==> 백틱으로 감싼 template literal 내부여야 한다.
console.log(`name: $first $last`);			// 									 중괄호는 생략할 수 없다.
console.log('name: ${first} ${last}');	// 일반 문자열에서는 interpolation이 적용되지 않는다.
