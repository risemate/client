export const RolesType = ['GENERAL', 'EXPERT', 'ADMIN', 'REVIEWING'] as const;
export type RolesType = (typeof RolesType)[number];

export type Auth = {
	_id: string;
	cash: number;
	coin: number;
	completedCoaching: unknown;
	completedCoachingCount: number;
	coverletterCount: number;
	createdAt: string;
	csCount: number;
	email: string;
	inProgressCoaching: unknown;
	inProgressCoachingCount: number;
	name?: string;
	nickname: string;
	picture: string; //avatar url
	provider: string;
	refreshToken: string;
	responseWaitingCoaching: unknown;
	responseWaitngCoachingCount: number;
	resumeCount: number;
	reviewCount: number;
	role: RolesType;
	updatedAt: string;
	waitingPaymentCoachingCount: number;
};

export type BaseUser = {
	nickname: string;
	picture: string;
	_id: string;
};

export type LoginResponse = {
	accessToken: string;
	user: Auth;
};

export type UserInfoRequestProps = {
	name: string | null;
	nickname: string | null;
	email: string | null;
	picture: string | null;
};
