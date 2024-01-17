import { networkQuery } from '@queries/network';

export default function useNetwork() {
	const networks = networkQuery();
	return {
		networks: networks.data?.data || [],
	};
}
