const repeatString = function (string, num) {
	let word = '';
	if (num < 0) return 'ERROR';
	for (let i = 0; i < num; i++) {
		word += string;
	}
	return word;
};

console.log(repeatString('hey', 2));

// Do not edit below this line
module.exports = repeatString;
