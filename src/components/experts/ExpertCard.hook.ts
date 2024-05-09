import { useNavigate } from 'react-router-dom';

export default function useExpertCard(id: string) {
	const navigate = useNavigate();
	const moveToDetail = () => {
		navigate(`/experts/${id}`);
	};
	return {
		moveToDetail,
	};
}
