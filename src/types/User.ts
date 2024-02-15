export enum Roles {
	'GENERAL',
	'EXPERT',
	'ADMIN',
}
export type Auth = {
	_id: string;
	createdAt: string;
	updatedAt: string;
	email: string;
	name?: string;
	nickname: string;
	picture: string; //avatar url
	role: Roles;
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
