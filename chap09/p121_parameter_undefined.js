// 자바스크립트에서는 함수 호출시 매개변수를 잘못 주어도 에러가 발생하지 않는다.
function func1(no) {
	console.log(no);
}

func1();				// undefined :  함수 호출 시 매개변수가 있어야 할 자리에 아무 값이나 변수 없이 호출한 경우, 해당 매개변수에는 undefined가 들어간다.
func1(10);			// 10
func1(10, 0);		// 10


// 이러한 문제 때문에 에러방지를 위한 별도의 방법이 필요하다.
// 함수 내부에서 매개변수가 undefined인지를 체크하기 위해 short circuit evaluation을 사용할 수 있다.
function getLength(str) {
	str = str || '';				// 만약 undefined이면 ''값으로 대체한다.
	return str.length;
}

console.log(getLength());						// 0
console.log(getLength('hello'));		// 5


// ES6의 매개변수 기본값 설정
function getLength2(str = '') {
	return str.length;
}

console.log(getLength2());					// 0
console.log(getLength2('hello'));		// 5
