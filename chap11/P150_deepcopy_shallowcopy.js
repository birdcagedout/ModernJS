const o = { x: {y: 1} };

// 얕은 복사
const c1 = {...o};							// { x: {y: 1} }
console.log(o === c1);					// false
console.log(o.x === c1.x);			// true


// 깊은 복사
const _ = require('lodash');
const c2 = _.cloneDeep(o);
console.log(o === c2);					// false
console.log(o.x === c2.x);			// false

