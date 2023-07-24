// 함수의 상위 스코프: "함수가 정의된 위치"에 따라 상위 스코프 결정 (함수가 호출된 위치에 따라 결정되지 않음)

var x = 1;

function foo() {
	var x = 10;
	bar();								// bar()를 호출하는 위치는 중요하지 않고, bar 함수가 정의된 위치에 따라 상위 스코프가 결정되므로 bar() 내부의 x는 전역변수 x임
}

function bar() {
	console.log(x);
}


foo();									// 1
bar();									// 1
