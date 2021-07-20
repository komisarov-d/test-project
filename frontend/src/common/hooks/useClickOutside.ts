import { useEffect, RefObject } from 'react';

const useClickOutside = (ref: RefObject<any>, callback: () => void): void => {
	useEffect(() => {
		const handleClickOutside = ({ target }) => {
			const node = ref.current;

			if (node && node !== target && !node.contains(target)) {
				callback();
			}
		};

		document.addEventListener('click', handleClickOutside, false);

		return () => {
			document.removeEventListener('click', handleClickOutside, false);
		};
	}, [callback, ref]);
};

export default useClickOutside;
