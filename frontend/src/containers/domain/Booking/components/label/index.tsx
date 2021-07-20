import React, { FunctionComponent } from 'react';

const Label: FunctionComponent = ({ children }) => {
	return <span className="text-md text-green-700 bg-green-100 inline-block py-1 px-2">{children}</span>;
};

export default Label;
