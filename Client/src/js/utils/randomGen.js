 const getRandomNumber = function() {
	let x = Date.now().toString();
	let result = '';
	for (let i = 0; i < x.length; i++) {
		i % 2 === 0 && (result += x.charAt(i));
	}
	result = +result + Math.floor(Math.random() * 10000);
	return result;
}

export default getRandomNumber;
