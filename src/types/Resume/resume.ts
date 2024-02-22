import { regPhoneNumber } from '@utils/regex';
import { EmploymentStatus, GraduationStatus, JobType, ProjectStatus } from 'types/Resume';
import { z } from 'zod';

export const LinkSchema = z.object({
	linkTitle: z.string(),
	linkUrl: z.string(),
});

export const ProfileSchema = z.object({
	email: z.string().min(1).email('이메일 형식을 입력해주세요.'),
	birthday: z.string().datetime().nullable().default(null),
	phoneNumber: z.string().regex(regPhoneNumber).nullable().default(null),
	name: z.string().min(1, '이름을 입력해주세요.'),
	profileImage: z.string().nullable().default(null),
	position: z.string().nullable().default(null),
	links: z.array(LinkSchema).nullable().default(null),
	job: z.string().nullable().default(null),
});

export const WorkExperienceSchema = z.object({
	companyName: z.string().nullable().default(null),
	departmentName: z.string().nullable().default(null),
	role: z.string().nullable().default(null),
	jobType: z.enum(JobType).default(JobType[0]),
	employmentStatus: z.enum(EmploymentStatus).default(EmploymentStatus[0]),
	startedAt: z.string().datetime().nullable().default(null),
	endedAt: z.string().datetime().nullable().default(null),
	description: z.string().nullable().default(null),
	links: z.array(LinkSchema).nullable().default(null),
});

export const TechStackSchema = z.object({
	skills: z.string().array().nullable().default(null),
});

export const ProjectSchema = z.object({
	projectName: z.string().nullable().default(null),
	summaryIntro: z.string().nullable().default(null),
	startedAt: z.string().datetime().nullable().default(null),
	endedAt: z.string().datetime().nullable().default(null),
	description: z.string().nullable().default(null),
	projectStatus: z.enum(ProjectStatus).default(ProjectStatus[0]),
	projectOrganization: z.string().nullable().default(null),
	links: z.array(LinkSchema).nullable().default(null),
});

export const EducationSchema = z.object({
	schoolName: z.string().nullable().default(null),
	educationalInstitution: z.string().nullable().default(null),
	major: z.string().nullable().default(null),
	description: z.string().nullable().default(null),
	graduationStatus: z.enum(GraduationStatus).default(GraduationStatus[0]),
	startedAt: z.string().datetime().nullable().default(null),
	endedAt: z.string().datetime().nullable().default(null),
	links: z.array(LinkSchema).nullable().default(null),
});

export const ActivitySchema = z.object({
	activityName: z.string().nullable().default(null),
	activityOrganization: z.string().nullable().default(null),
	description: z.string().nullable().default(null),
	startedAt: z.string().datetime().nullable().default(null),
	endedAt: z.string().datetime().nullable().default(null),
	links: z.array(LinkSchema).nullable().default(null),
});

export const CertificateSchema = z.object({
	certificateName: z.string().nullable().default(null),
	certificateGrade: z.string().nullable().default(null),
	certificatedAt: z.string().datetime().nullable().default(null),
	certificateOrganization: z.string().nullable().default(null),
	links: z.array(LinkSchema).nullable().default(null),
});

export const ResumeSchema = z.object({
	profile: ProjectSchema,
	coverImage: z.string().nullable().default(null),
	docTitle: z.string().min(1, '이력서 제목을 입력해주세요.'),
	description: z.string().nullable().default(null),
	public: z.boolean().default(false),
	contactPublic: z.boolean().default(false),
	coverLetter: z.string().nullable().default(null),
	techStack: TechStackSchema,
	links: z.array(LinkSchema).nullable().default(null),
	workExperiences: z.array(WorkExperienceSchema).nullable().default(null),
	projects: z.array(ProjectSchema).nullable().default(null),
	educations: z.array(EducationSchema).nullable().default(null),
	activities: z.array(ActivitySchema).nullable().default(null),
	certificates: z.array(CertificateSchema).nullable().default(null),
	careerYears: z.number().default(0),
	lookingForJob: z.boolean().default(true),
});

export type LinkType = z.infer<typeof LinkSchema>;
export type ProfileType = z.infer<typeof ProfileSchema>;
export type WorkExperienceType = z.infer<typeof WorkExperienceSchema>;
export type TechStackType = z.infer<typeof TechStackSchema>;
export type ProjectType = z.infer<typeof ProjectSchema>;
export type EducationType = z.infer<typeof EducationSchema>;
export type ActivityType = z.infer<typeof ActivitySchema>;
export type CertificateType = z.infer<typeof CertificateSchema>;
export type ResumeType = z.infer<typeof ResumeSchema>;
