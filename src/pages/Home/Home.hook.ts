import { networkQuery } from '@queries/network';
import { productsQuery } from '@queries/product';

export default function useHome() {
	const networks = networkQuery();
	const experts = productsQuery();
	return {
		networks: networks.data?.data || [],
		experts: experts.data?.data || [],
	};
}
