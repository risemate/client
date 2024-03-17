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

export const isKoreanSingleCharacter = (query: string) => {
	const lastCharacter = query.charAt(query.length - 1);
	if (lastCharacter === ' ') return true;
	const pattern = /[ㄱ-ㅎㅏ-ㅣ]/;
	return pattern.test(lastCharacter);
};

export const removeNullValues = <T>(obj: T) => {
	const newObj: T = {} as T;
	for (const key in obj) {
		if (obj[key] !== null) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
};

export const numberWithCommas = (num: number | null | undefined | string) => {
	if (num === null || num === undefined) return null;
	if (typeof num === 'string') return parseInt(num).toLocaleString();
	return num.toLocaleString();
};

export const maskString = (str: string, start: number, mask: string) => {
	if (isEmpty(str)) {
		return '';
	}
	const maskedPart = str.slice(start).replace(/./g, mask);
	return str.slice(0, start) + maskedPart;
};

export const formatDate = (date: string) => {
	const formatDate = new Date(date);
	const year = formatDate.getFullYear().toString();
	const month = (formatDate.getMonth() + 1).toString().padStart(2, '0');
	const day = formatDate.getDate().toString().padStart(2, '0');
	return {
		period: `${year}.${month}.${day}`,
		dash: `${year}-${month}-${day}`,
	};
};

export const dateToString = (date: Date) => {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString();
	return `${year}-${month}-${day}`;
};
