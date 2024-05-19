export type Pending = {
	temp: number;
};

export type Progress = {
	temp: number;
};

export type Complete = {
	temp: number;
};

export type Management = {
	pending: Pending[];
	progress: Progress[];
	complete: Complete[];
};
