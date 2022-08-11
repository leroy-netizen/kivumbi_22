/** @format */
import React, { Fragment, useState, useEffect } from 'react';

const Competitors = () => {
	const [candidateData, setCandidateData] = useState([]);

	const baseUrl = 'https://static.nation.africa/2022/president.json';
	const getData = async () => {
		const response = await fetch(baseUrl);
		const data = await response.json();
		console.log(data);
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<Fragment>
			<div>Competitors</div>
			<div>Wajackoyah</div>
			<div>Odiga</div>
			<div>Ruto</div>
			<div>Waihiga</div>
		</Fragment>
	);
};

export default Competitors;
