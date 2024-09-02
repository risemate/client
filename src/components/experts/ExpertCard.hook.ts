import { useNavigate } from 'react-router-dom';
import { Package } from 'types/coach/product';

export default function useExpertCard(id: string) {
	const navigate = useNavigate();
	const moveToDetail = () => {
		navigate(`/experts/${id}`);
	};
	const findMinPrice = (packages: Package): number => {
		const filteredPackages = Object.values(packages).filter(
			pkg => pkg !== null && pkg !== undefined,
		);
		const prices = filteredPackages.map(pkg => pkg?.price || Infinity);
		return Math.min(...prices); // 최소값 반환
	};
	return {
		moveToDetail,
		findMinPrice,
	};
}
