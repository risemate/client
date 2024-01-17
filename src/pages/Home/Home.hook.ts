import { networkQuery } from '@queries/network';

export default function useHome() {
	const networks = networkQuery();
	return {
		networks: networks.data?.data || [],
	};
}
