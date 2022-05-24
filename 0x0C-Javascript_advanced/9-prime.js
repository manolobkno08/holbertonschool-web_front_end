const countPrimeNumbers = () => {
	let amount = 0;
	for (let divisor = 2; divisor <= 200; divisor++) {
		let times = 0;
		for (let dividend = 2; dividend <= divisor; dividend++) {
			if (divisor % dividend == 0) times++;
		}
		if (times == 1) amount++;
	}
	return amount;
};
const start = performance.now();
countPrimeNumbers();
const end = performance.now();
console.log(
	`Execution time of printing countPrimeNumbers was ${end - start
	} milliseconds.`
);