function add(x, y) {
	console.log(arguments);
	return x + y;
}

add (1, 2, 3);					// [Arguments] { '0': 1, '1': 2, '2': 3 }
