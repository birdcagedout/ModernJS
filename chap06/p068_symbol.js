// 심벌 값 생성
var key = Symbol('key');
console.log(typeof key);
console.log(key);

// 객체 생성
var obj = {};

// unique한 값인 심벌을 객체의 프로퍼티 키로 사용
obj[key] = 'value';
console.log(obj[key]);

