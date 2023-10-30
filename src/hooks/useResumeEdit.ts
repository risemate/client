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

	return { addData, deleteData, updateData };
}
