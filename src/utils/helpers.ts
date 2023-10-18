export const isEmpty = (value: null | undefined | string | object): boolean => {
	if (value === null || value === undefined) {
		return true;
	}

	if (typeof value === 'string' || Array.isArray(value)) {
		return value.length === 0;
	}

	if (typeof value === 'object') {
		if (value instanceof Map || value instanceof Set) {
			return value.size === 0;
		}

		return Object.keys(value).length === 0;
	}

	return false;
};
