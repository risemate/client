import { myProductQuery } from '@queries/product';
import { useState } from 'react';

export default function useMyProduct() {
	const myProducts = myProductQuery();
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const updateSelectedId = (id: string | null) => setSelectedId(id);

	return {
		myProducts: myProducts.data || [],
		selectedId: {
			value: selectedId,
			update: updateSelectedId,
		},
	};
}
