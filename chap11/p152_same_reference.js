var person = {
	name: 'Lee'
};
// 같은 주소의 객체(1개)를 person이라는 변수도 참조하고, copy라는 변수도 참조한다.
var copy = person;
console.log(person === copy);				// true

// 하나를 바꾸면 다른 하나도 영향을 받는다.
person.name = "Kim";
person.address = "Seoul";

console.log(person);								// { name: 'Kim', address: 'Seoul' }
console.log(copy);									// { name: 'Kim', address: 'Seoul' }

