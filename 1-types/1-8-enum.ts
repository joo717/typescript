{
	/* Enum */

	// JavaScript
	const MAX_NUM = 6;
	const MAX_STUDENTS_PER_CLASS = 10;
	const MONDAY = 0;
	const TUESDAY = 1;
	const WEDNESDAY = 2;
	const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "THESDAY": 1, "WEDNESDAY": 2 });
	const dayOfToday = DAYS_ENUM.MONDAY;

	// TypeScript
	type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
	enum Days {
		Monday,
		Tuesday,
		Wednesday,
		Thursday,
		Friday,
		Satarday,
		Sunday,
	}
	console.log(Days.Tuesday);
	let day: Days = Days.Satarday;
	day = 10;
	console.log(day);

	let dayOfWeek: DaysOfWeek = 'Monday';
	dayOfWeek = 'Wednesday';

}