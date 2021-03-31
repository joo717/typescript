{
	// JavaScript 🛩 => TypeScript
	// Optional parameter
	function printName(firstName: string, lastName?: string) {
		console.log(firstName);
		console.log(lastName);
	}
	printName('Steve', 'Jobs');
	printName('Ellie');
	printName('JJ', undefined);

	// Default parameter
	function printMessage(message: string = 'default message') {
		console.log(message);
	}
	printMessage();

	// Rest parameter
	function addNumbers(...numbers: number[]): number {
		return numbers.reduce((a, b) => a + b);
	}
	console.log(addNumbers(1, 2));
	console.log(addNumbers(1, 2, 3));
	console.log(addNumbers(1, 2, 3, 4, 5));
}
