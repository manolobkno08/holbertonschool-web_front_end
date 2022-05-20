function createClassRoom(numbersOfStudents) {
	function studentSeat(seat) {
		return function () {
			return seat;
		}
	}

	let students = [];
	for (let i = 0; i < numbersOfStudents; i++) {
		num = i + 1;
		students.push(studentSeat(num));
	}
	return students;
}

let classRoom = createClassRoom(10);
