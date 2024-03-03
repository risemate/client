export enum Roles {
	'GENERAL',
	'EXPERT',
	'ADMIN',
}
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
	role: Roles;
	updatedAt: string;
	waitingPaymentCoachingCount: number;
};

export interface Career {
	_id: string;
}

export type BaseUser = {
	nickname: string;
	picture: string;
	_id: string;
};

export type LoginResponse = {
	accessToken: string;
	user: Auth;
};
