import React, { FunctionComponent } from 'react';

const FormBlock: FunctionComponent = ({ children }) => {
	return <div className="bg-white p-3 px-8 mt-3 shadow first:mt-0 inline-block w-full rounded">{children}</div>;
};

export default FormBlock;
