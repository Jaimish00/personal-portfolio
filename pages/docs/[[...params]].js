import React from 'react';
import { useRouter } from 'next/router';

const Docs = () => {
	const router = useRouter();
	const { params = [] } = router.query;

	let textToRender = '';

	switch (params.length) {
		case 1:
			textToRender = `Viewing ${params[0]}`;
			break;

		case 2:
			textToRender = `Viewing ${params[1]} of ${params[0]}`;
			break;

		case 3:
			textToRender = `Viewing ${params[2]} of ${params[1]} of ${params[0]}`;
			break;

		default:
			textToRender = 'Documenation page';
			break;
	}

	return (
		<div className='container'>
			<h1>{textToRender}</h1>
		</div>
	);
};

export default Docs;
