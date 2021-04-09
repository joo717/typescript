{
	// Array
	const fruits: string[] = ['apple', 'banana'];
	const scores: Array<number> = [1, 3, 4];
	function printArray(fruits: readonly string[]) { }

	// Tuple -> interface, type alias, class 권장
	let student: [string, number];
	student = ['name', 123];
	student[0]; // name
	student[1]; // 123
	const [name, age] = student;

}