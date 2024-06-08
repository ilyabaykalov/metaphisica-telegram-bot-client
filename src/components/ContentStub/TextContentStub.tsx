import React from 'react';
import { Skeleton } from '@mui/material';

const TextContentStub = ({ width }: Properties) => (
	<Skeleton
		variant="text"
		sx={ {
			width: width || '30%',
			display: 'inline-block',
			fontSize: '1rem',
		} }/>
);

interface Properties {
	width?: string;
}

export default TextContentStub;
