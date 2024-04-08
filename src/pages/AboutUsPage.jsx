import React from 'react';
import { info } from 'sass';
import { Info } from '../components/Info';
import { Welcome } from '../components/Welcome';

export const AboutUsPage = () => {
	return (
		<div className='SubPageContainer'>
			<Info />
			<Welcome />
		</div>
	);
};
