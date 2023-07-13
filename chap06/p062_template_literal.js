// 일반 문자열에서는 줄바꿈이 허용되지 않는다.
// SyntaxError: Invalid or unexpected token
/* var str = 'Hello
world';
console.log(str); */


// 하지만 template literal에서는 줄바꿈이 허용된다.
// 게다가 개행문자 자체도 문자열에 들어간다.
var str1 = `Hello
world`;
console.log(str1);


// 개행문자 뿐만 아니라, 공백, 탭까지도 그대로 들어간다.
var str2 =
`<ul>
	<li>
		<a href="#"> Home </a>
	</li>
</ul>
`;
console.log(str2);
