// 옵셔널 체이닝: 좌항 피연산자가 null인 undefined이면 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 계속한다.
var elem = null;
var value = elem?.value;
console.log(value);				// undefined


// ES6 이전에는 논리연산자(&&)를 사용: falsy(undefined, null, 0, NaN, '')값이면 좌항 피연산자를 그대로 반환
var str = '';
var length = str && str.length;			// length값은 str값이다
console.log(length);								// ''


// 하지만, 옵셔널 체이닝 연산자는 undefined 또는 null일 때만 undefined를 반환한다. (그 외의 값이면 체이닝 이어간다.)
var str2 = '';
var length2 = str2?.length;					// length2값은 ''의 length값이다
console.log(length2);								// 0

