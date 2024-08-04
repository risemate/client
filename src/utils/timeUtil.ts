export const calculateTimeRemaining = (createdAt: string): string => {
	const now = new Date().getTime();
	const createdAtDate = new Date(createdAt).getTime();
	const diff = 48 * 60 * 60 * 1000 - (now - createdAtDate);

	if (diff <= 0) {
		return '00:00:00';
	}

	const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
	const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(
		2,
		'0',
	);
	const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');

	return `${hours}:${minutes}:${seconds}`;
};
