export const getDirtyFields = <
	TData extends Record<keyof TDirtyItems, unknown>,
	TDirtyItems extends Record<string, unknown>,
>(
	formValues: TData,
	dirtyItems: TDirtyItems,
): Partial<TData> => {
	return Object.entries(dirtyItems).reduce((dirtyData, [key, value]) => {
		// value가 false면 무시
		if (value === false) return dirtyData;

		// value가 true인 경우, dirtyData에 추가
		if (value === true) return { ...dirtyData, [key]: formValues[key] };

		// 하위 필드 처리
		const child = getDirtyFields(
			formValues[key] as TData,
			dirtyItems[key] as TDirtyItems,
		);

		if (typeof child === 'object' && Object.keys(child).length === 0) {
			return dirtyData;
		}

		if (Array.isArray(child) && child.length === 0) {
			return dirtyData;
		}

		return {
			...dirtyData,
			[key]: child,
		};
	}, {});
};

// eslint-disable-next-line
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
