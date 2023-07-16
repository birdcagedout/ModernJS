// 어떤 객체가 null 또는 undefined인지 모르고 속성에 접근하면 TypeError 발생

/* var elem1 = null;
var value = elem1.value;		// TypeError: Cannot read properties of null (reading 'value') */

/* var elem2;
var value = elem2.value;		// TypeError: Cannot read properties of undefined (reading 'value') */


// 이때는 short circuit evaluation을 사용하면 에러가 발생하지 않는다.
var elem1 = null;
var value1 = elem1 && elem1.value;		// 에러 없이 value에는 (elem값인) null이 들어간다.
console.log(value1);

// undefined일 때도 마찬가지
var elem2;
var value2 = elem2 && elem2.value;		// 에러 없이 value에는 (elem값인) undefined가 들어간다.
console.log(value2);
