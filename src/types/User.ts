type Roles = 'general' | 'expert' | 'admin';
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

export type User = {
	nickname: string;
	picture: string;
	_id: string;
};
