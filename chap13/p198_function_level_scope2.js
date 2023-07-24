var i = 10;

for (var i = 0; i < 5; i++) {			// 함수 레벨 스코프가 아니므로 i는 전역변수 재선언에 불과함 (루프 끝나면 i = 5)
	console.log(i);
}

console.log(i);										// 5