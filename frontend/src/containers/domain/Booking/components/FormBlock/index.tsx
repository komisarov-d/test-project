import React, { FunctionComponent } from 'react';

const FormBlock: FunctionComponent = ({ children }) => {
	return <div className="bg-white p-3 mt-3 shadow first:mt-0 inline-block w-full">{children}</div>;
};

export default FormBlock;
