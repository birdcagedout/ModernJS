// 함수 내부에서 "함수 이름"을 사용하여 재귀함수를 만들 수도 있고
function factorial(n) {
	if (n <= 1) {
		return 1;
	}
	return n * factorial(n-1);
}

console.log(factorial(5));


// 함수 내부에서 "함수를 가리키는 식별자"를 사용하여 재귀함수를 만들 수도 있다.
var f = function fact(n) {
	if (n <= 1) {
		return 1;
	}
	return n * f(n-1);
}

console.log(f(5));
