import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

const useQueryString = (): any => {
	const history = useHistory();
	const queryParams = queryString.parse(history.location.search, { parseNumbers: true });

	function setQueryParams(params: any) {
		const search = queryString.stringify(params);
		history.push({ search });
	}

	return { queryParams, setQueryParams };
};

export default useQueryString;
