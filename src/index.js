module.exports = function zeros(expression) {
	let expMass = expression.split('*');
	let oneFactorial = [];
	let twoFactorial = [];
	let counter = 0;
	let zerosCount = 0;
	console.log(expMass);
	expMass.map(function(item){
		if(item.endsWith('!!')){
			twoFactorial.push(+item.slice(0, -2));
		}
		else {
			oneFactorial.push(+item.slice(0, -1));
		}
	})
	twoFactorial.map(function(number) {
		if (number % 2 === 0) {
			counter += 1;
		}
		for (let i = number; i > 0; i -= 2) {
			if (i % 5 === 0) {
				zerosCount += 1;
				if (i % 25 === 0) {
					zerosCount += 1;
				}
			}
		}
	})
	oneFactorial.map(function(number){
		zerosCount += Math.floor(number / 5) + Math.floor(number / 25);
		counter += 1;
	});
	if(counter == 0){
		return 0;
	} 
	console.log(counter)
	return zerosCount;
}








