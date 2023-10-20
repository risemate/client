export type Resume = {
	_id: number;
	resumeTitle: string;
	parentId: string;
	resumeType: 'BASIC' | 'AI' | 'COACHING';
	name: string;
	job: string;
	postion: string;
	profileImage: string;
	coverLetter: string;
	techStack: {
		skills: string[];
	};
	workExperiences: WorkExperience[];
	projects: Project[];
	portfolio: {
		links: Link[];
		attachFiles: string[]; // 여기에 첨부 파일에 대한 타입을 추가해야 합니다.
	};
	educations: Education[];
	activities: Activity[];
	careerStatus: boolean;
	entryLevel: boolean;
	careerYears: number;
	lookingForJob: boolean;
};

type Link = {
	linkTitle: string;
	linkUrl: string;
};

export type WorkExperience = {
	companyName: string;
	departmentName: string;
	role: string;
	jobType: '정규직' | '계약직'; // 또는 다른 유형 추가
	employmentStatus: 'EMPLOYMENT' | 'RESIGNATION' | '기타'; // 다른 상태가 있을 수 있습니다.
	workStartedAt: string; // 날짜 형식으로 변경 필요
	workEndedAt: string; // 날짜 형식으로 변경 필요
	assignedTask: string;
	links: Link[];
};

export type Project = {
	projectName: string;
	summaryIntro: string; // 오타 수정: summaryintro -> projectSummaryIntro
	projectStartedAt: string; // 날짜 형식으로 변경 필요
	projectEndedAt: string; // 날짜 형식으로 변경 필요
	projectDescription: string;
	projectStatus: 'DONE' | 'ATTEND' | '진행 중' | '완료되지 않음'; // 다른 상태가 있을 수 있습니다.
	projectOrganization: string; // 또는 다른 유형 추가
	links: Link[];
};

export type Education = {
	schoolName: string;
	major: string;
	graduationStatus: 'ATTEND' | 'GRADUATED' | '중도 퇴학' | '기타'; // 다른 상태가 있을 수 있습니다.
	enrollmentStartedAt: string; // 날짜 형식으로 변경 필요
	enrollmentEndedAt: string; // 날짜 형식으로 변경 필요
	links: Link[];
};

export type Activity = {
	activityName: string;
	activityYear: number;
	activityDescription: string;
	activityOrganization: string;
	links: Link[];
};
