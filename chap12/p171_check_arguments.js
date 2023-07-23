function add(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw new TypeError('인수는 모두 number여야 합니다.');
	}
	return x + y;
}

console.log(add(1));						// TypeError: 인수는 모두 number여야 합니다.
console.lof(add('a','b'));			// TypeError: 인수는 모두 number여야 합니다.