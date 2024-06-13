/* eslint-disable max-lines-per-function */
import { React } from 'react';
import StudentManager from '../services/StudentManager';
const StudentTable = (context) => {
	const { config: { students }} = context;
	const studentProgress = students.map((student) =>
		StudentManager.addFields({ ...context, data: student }));
	const markSheets
	= StudentManager.getMarkSheet({ ...context, data: studentProgress });

	return 	<table>

		<tr>
			<th>Name</th>
			<th>Language</th>
			<th>Maths</th>
			<th>Science</th>
			<th>Total</th>
			<th>Result</th>
			<th>Rank</th>

		</tr>
		{ markSheets.map((val, key) =>
			<tr key={ key }>
				<td>{ val.name }</td>
				<td>{ val.language }</td>
				<td>{ val.maths }</td>
				<td>{ val.science }</td>
				<td>{ val.total }</td>
				<td>{ val.result }</td>
				<td>{ val.rank }</td>

			</tr>) }
	</table>;
};

export default StudentTable;
