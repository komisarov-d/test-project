const getEnvVariable = (key: string): string => process.env[key] as string;
// const isOnDev = () => process.env.NODE_ENV === "development";

export const env = {
	apiOrigin: getEnvVariable('REACT_APP_API_ORIGIN_URL')
};
