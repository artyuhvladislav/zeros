module.exports = function zeros(expression) {
	let expMass = expression.split('*');
	let expMassSecond = [];

	for(let i = 0; i < expMass.length; i++){
		if((expMass[i].slice(expMass[i].length-2)) === '!!'){
			let index;
			index = expMass.indexOf(expMass[i]);
			expMassSecond.push(expMass[i]);
			expMass.splice(index, 1);
		}
	};

	let   expMassSecondStr = expMassSecond.join(' ');
	let   numMassSecondStr = expMassSecondStr.split('!!');

	numMassSecondStr.pop();

	let numMassSecond = [];

	for (let i = 0; i < numMassSecondStr.length; i++){
		numMassSecond.push(+numMassSecondStr[i]);
	};

	let counterSecond = 0;

	for (let i = 0; i < numMassSecond.length; i++){
		for (let j = 10; numMassSecond[i]/j >= 1; j *= 10){
			counterSecond += Math.floor(numMassSecond[i]/j);
		}
	};

	let expMassStr = expMass.join(' ');
	let   numMassStr = expMassStr.split('!');

	numMassStr.pop();

	let numMass = [];
	for (let i = 0; i < numMassStr.length; i++){
		numMass.push(+numMassStr[i]);
	};
	let counter = 0;
	for (let i = 0; i < numMass.length; i++){
		for (let j = 5; numMass[i]/j >= 1; j *= 5){
			counter += Math.floor(numMass[i]/j);
		}
	}
	return counter+counterSecond; 
}








