// null 병합 연산자: 좌항 피연산자가 null 또는 undefined이면 우항 값을 취하고, 그렇지 않으면 좌항값을 취한다.

var foo = null ?? 'default';
console.log(foo);							// 'default'

// ES6 이전에는 논리합(||) 연산자를 사용했으나, Falsy한 값이면 무조건 우항값을 취한다.
var v1 = '' || 'default';
console.log(v1);							// 'default'

// 그러나 null 병합 연산자는 null 또는 undefined일 때만 우항값을 취한다.
var v2 = '' ?? 'default';
console.log(v2);							// ''

