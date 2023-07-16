// labeled statement
// - 식별자와 콜론을 붙인 문으로, 바로 직후에 오는 statement(주로 {}블록)를 가리킨다.
// - break (라벨명): 해당 라벨이 붙은 statement을 종료한 후 바로 다음 statement로 이동
// - continue (라벨명): 해당 라벨이 붙은 반복문 중 다음번 반복회차(next iteration)로 이동
// - break와 continue는 반드시 labeled statement 내부에서만 사용가능하다.(label 자체가 하나의 scope)
// - break는 labeled statement 내부라면 어디든 사용가능하고, continue는 반복문(for, while, do while)에서만 사용가능하다.


// 1) 단일 labeled statement 예제
let str = '';

loop1:
for (let i = 0; i < 5; i++) {
	if (i == 1) {
		continue loop1;
	}
	str = str + i;
}

console.log(str);
console.log('===================================');


// 2) multiple labeled statement 예제 (중복 loop의 내부 loop에서, 현재 내부 loop의 남은 부분을 건너 뛰고 외부 loop에서 반복 계속)
loop1: for (let i = 0; i < 3; i++) {
	loop2: for(let j = 0; j < 3; j++) {
		if (i == 1 && j == 1) {
			continue loop1;					// loop2에 남아있는 iteration은 모두 무시된다.
		}
		console.log(`i = ${i}, j = ${j}`);
	}
}
console.log('===================================');


// 3) multiple labeled statement (중복 loop의 내부 loop에서, (내부 loop는 물론이고) 외부 loop까지도 중단 시킴)
outer: for (let k = 0; k < 3; k++) {
	for (let l=0; l < 3; l++) {
		if (k + l === 4) {
			break outer;
		}
		console.log(`k = ${k}, l = ${l}`);
	}
}
