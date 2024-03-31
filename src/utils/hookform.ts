export const getDirtyValues = <
	DirtyFields extends Record<string, unknown>,
	Values extends Record<keyof DirtyFields, unknown>,
>(
	dirtyFields: DirtyFields,
	values: Values,
): Partial<typeof values> => {
	const dirtyValues = Object.keys(dirtyFields).reduce((prev, key) => {
		// Unsure when RFH sets this to `false`, but omit the field if so.
		if (!dirtyFields[key]) return prev;

		return {
			...prev,
			[key]:
				typeof dirtyFields[key] === 'object'
					? getDirtyValues(dirtyFields[key] as DirtyFields, values[key] as Values)
					: values[key],
		};
	}, {});

	return dirtyValues;
};

export const removeEmptyObjectField = <T extends Record<string, any>>(obj: T): T => {
	const newObj: Partial<T> = {};
	for (const key in obj) {
		const value = obj[key];
		if (typeof value === 'object' && !Array.isArray(value)) {
			const nonEmptyObj = removeEmptyObjectField(value);
			if (Object.keys(nonEmptyObj).length > 0) {
				newObj[key] = nonEmptyObj;
			}
		} else if (value !== undefined && value !== null && value !== '') {
			newObj[key] = value;
		}
	}
	return newObj as T;
};
