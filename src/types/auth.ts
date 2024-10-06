export const RolesType = ['GENERAL', 'EXPERT', 'ADMIN', 'REVIEWING'] as const;
export type RolesType = (typeof RolesType)[number];

export type Auth = {
	_id: string;
	admin: boolean;
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
	lastActiveAt: string;
	alarmOptions: {
		mail: AlarmOptions
	}
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
	alarmOptions: {
		mail: AlarmOptions
	} | null
};

export const AlarmOptionList = [
	{ label: "리뷰 댓글", value: "review_comment" },
	{ label: "결제", value: "paid" },
	{ label: "사이트", value: "site" },
	{ label: "이벤트", value: "event" },
	{ label: "질문/답변", value: "ask_answer" }
] as const;

// AlarmOptions 타입을 value 값만 가지도록 수정
export type AlarmOptions = {
	[key in typeof AlarmOptionList[number]['value']]: boolean;
}

export interface User extends Auth {
	deletionStatus: { isDeleted: boolean; isDeleteCancelled: boolean; deletedAt: Date };
}
