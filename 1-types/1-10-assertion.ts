{
	/* Type Assertions */
	function jsStrFunc(): any {
		return '2222222';
	}
	const result = jsStrFunc();
	console.log((result as string).length);
	console.log(<string>result.length);

	const wrong: any = 5;
	// console.log((wrong as Array<number>).push(1)); // 😨 

	function findNumbers(): number[] | undefined {
		return undefined;
	}
	const numbers = findNumbers();
	numbers!.push(3);// 😨
	console.log(numbers);
}