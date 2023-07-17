// 객체 리터럴을 사용하여 객체 생성
var person = {
	name: 'Lee',
	sayHello: function () {
		console.log(`Hello! my name is ${this.name}.`);
	}
}

// 새로운 프라퍼티를 추가

// dot notaion을 사용해도 가능
person.family = 5;

// bracket notation을 사용해도 가능 ==> bracket notation을 사용할 때는 프라퍼티key가 식별자 규칙을 따르든 따르지 않든, 프라퍼티key는 따옴표로 묶어주어야 한다.
// person[age] = 44;			// ReferenceError: age is not defined
person['age'] = 44;

person['korean-age'] = 45;		// 식별자(identifier) 규칙을 따르지 않는 프라퍼티는 따옴표로 묶어주어야 한다.

console.log(person);

/*
{
  name: 'Lee',
  sayHello: [Function: sayHello],
  age: 44,
  'korean-age': 45
}
 */

console.log(person.age);
console.log(person['korean-age']);



delete person.family;
delete person.sayHello;
delete person['korean-age'];
console.log(person);