import { useNavigate } from "react-router-dom";

export default function useExpert() {
    const navigate = useNavigate();
	const moveToDetail = () => {
		navigate('/experts/1');
	};
  return {
    moveToDetail,
  };
}
