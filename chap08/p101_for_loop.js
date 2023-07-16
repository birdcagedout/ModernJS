// 1) for-loop에 var 사용한 경우
for(var i = 0; i < 2; i++) {
	console.log(i);
}

// for-loop에 var를 사용하면 loop 외부에서도 변수를 접근할 수 있어서 바람직하지 않다.
console.log(i);


// 2) for-loop에 let 사용한 경우
for(let j = 0; j < 2; j++) {
	console.log(j);
}

// for-loop 외부에서 변수에 접근할 수 없다.
console.log(j);		// ReferenceError: j is not defined
