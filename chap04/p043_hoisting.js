// 1. var 선언이 뒤에 있을 때 ==> undefined
/* console.log(score);
var score; */

// 2. let 선언이 뒤에 있을 때 ==> ReferenceError: Cannot access 'score' before initialization
//		==> hoisting 안 되는 것이 아니다. hoisting은 되지만 Error를 발생시킬 뿐이다.
console.log(score);
let score;



