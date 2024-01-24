import { networkQuery } from '@queries/network';
import { CareerType } from 'types/CareerDocument';

export default function useNetwork(careerType: CareerType | undefined) {
	const networks = networkQuery({ careerType });
	return {
		networks: networks.data?.data || [],
	};
}
