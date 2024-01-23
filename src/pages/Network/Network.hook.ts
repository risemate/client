import { networkQuery } from '@queries/network';

export default function useNetwork(tabValue: string | number) {
	const networks = networkQuery();
	return {
		networks: networks.data?.data || [],
	};
}
