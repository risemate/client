import { Link as LinkType, Resume as ResumeType } from 'types/Resume';

export default function useResumeEdit<T>(
	data: T[],
	defaultData: T,
	keyword: string,
	handleInputChange: (field: keyof ResumeType, value: T[]) => void,
) {
	const addData = () => {
		const newData: T[] = [defaultData, ...data];
		handleInputChange(keyword as keyof ResumeType, newData);
	};

	const deleteData = (index: number) => {
		const newData = [...data];
		newData.splice(index, 1);
		handleInputChange(keyword as keyof ResumeType, newData);
	};

	const updateData = (
		index: number,
		field: keyof T,
		value: string | number | LinkType[],
	) => {
		const newData = [...data];
		newData[index] = {
			...newData[index],
			[field]: value,
		};
		handleInputChange(keyword as keyof ResumeType, newData);
	};

	const changeIndex = (index: number, increase: boolean) => {
		const newData = [...data];
		if (increase) {
			if (index <= 0) return;
			[newData[index - 1], newData[index]] = [newData[index], newData[index - 1]];
		} else {
			if (index >= newData.length - 1) return;
			[newData[index], newData[index + 1]] = [newData[index + 1], newData[index]];
		}
		handleInputChange(keyword as keyof ResumeType, newData);
	};

	return { addData, deleteData, updateData, changeIndex };
}
