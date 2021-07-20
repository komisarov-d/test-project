/* eslint-disable @typescript-eslint/ban-types */
const checkIsExpectedError = <T, D extends Function>(error: T, expectedError: D): boolean => {
	const isExpectedError = error instanceof expectedError;

	return isExpectedError;
};

export { checkIsExpectedError };
