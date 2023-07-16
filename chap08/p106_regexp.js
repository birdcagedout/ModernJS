// 문자열에서 특정 문자가 몇 번 나오는지 찾기

var string = "hello world";
var search = 'll';
var count = 0;

// 1) for문으로 찾기
for (let i = 0; i < string.length; i++) {
	if (string[i] !== search) {
		continue;
	}
	count++;
}
console.log(count);
console.log('==================================');



// 2) RegExp 사용해서 찾기
const regexpGlobal = new RegExp(search, 'g');
const regexpFirst = new RegExp(search);

let resultGlobal = string.match(regexpGlobal);						// [ 'll' ]
let resultFirst = regexpFirst.test(string);								// true


console.log(resultGlobal);
console.log(resultFirst);
