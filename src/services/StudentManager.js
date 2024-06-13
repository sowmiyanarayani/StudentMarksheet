/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-magic-numbers */
const StudentManager = {
	getMarkSheet: (context) => {
		const { data } = context;

		return StudentManager.getRank(data);
	},
	addFields: (context) => {
		const { data } = context;

		return {
			...data,
 			total: StudentManager.getTotal(data),
			result: StudentManager.getResult(data),
		};
	},
	getTotal: ({ language, maths, science }) => language + maths + science,
	getResult: ({ language, maths, science }) =>
		(Math.min(
			language, maths, science
		) <= 35
			? 'fail'
			: 'pass'),

	getRank: (data) => {
		const studentGrade = data.map((
			student, index, array
		) => ({
			...student,
			rank:
      student.result === 'pass'
      	? array.filter((element) =>
      			element.total > student.total
				 && element.result !== 'fail',).length + 1
      	: '-',
		}));

		return studentGrade;
	},
};

export default StudentManager;
