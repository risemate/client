import { isEmpty } from '@utils/helpers';
// eslint-disable-next-line
import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Career } from 'types/CareerDocument';
import { Resume } from 'types/Resume';

import Button from '@common/Button';
import Empty from '@common/Empty';
// eslint-disable-next-line
import Loader from '@common/Loader';
import CareerBasicCard from '@components/resume/Card/CareerBasicCard';
import ReviseCareerCard from '@components/resume/Card/ReviseCareerCard';

// import AddResume from './AddResume';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface BasicResumeListProps {
	title: string;
	resumes: Career<Resume>[];
	isRevise?: boolean;
}

export default function BasicResumeList({
	title,
	resumes,
	isRevise,
}: BasicResumeListProps) {
	const setting = {
		modules: [Navigation, Pagination],
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 15,
		navigation: true,
		pagination: { clickable: true },
		breakpoints: {
			1180: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
		},
	};
	return (
		<BasicResumeSection>
			<div>
				<h3>{title}</h3>
				{isRevise || (
					<Button variant='navy' size='small' to='new/edit'>
						새 {title} +
					</Button>
				)}
			</div>
			{/* <StyledResumeList> */}
			{isEmpty(resumes) ? (
				<Empty>아직 작성하신 {title}가 없습니다</Empty>
			) : (
				<Swiper {...setting}>
					{/* {isRevise || (
						<SwiperSlide key={'helo'}>
							<AddResume />
						</SwiperSlide>
					)} */}
					{resumes.map(resume => (
						<SwiperSlide key={resume._id}>
							{isRevise ? (
								<ReviseCareerCard career={resume} />
							) : (
								<CareerBasicCard career={resume} />
							)}
						</SwiperSlide>
					))}
				</Swiper>
			)}
			{/* </StyledResumeList> */}
		</BasicResumeSection>
	);
}

// const StyledResumeList = styled.ul`
// 	width: 100%;
// 	display: flex;
// 	gap: 20px;
// 	justify-content: start;
// `;

const BasicResumeSection = styled.section`
	min-height: 300px;
	& > div:first-child {
		display: flex;
		align-items: center;
		gap: 30px;
		margin-bottom: 30px;
	}
	.swiper {
		width: 100%;
		padding-bottom: 50px;
	}
	.swiper-slide {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.swiper-pagination-bullet-active {
		background: ${({ theme }) => theme.colors.navy};
	}

	.swiper-button-next,
	.swiper-button-prev {
		/* 네비게이션 처리를 위한 화살표를 아래로 이동시킵니다. */
		top: initial;
		bottom: 0;
		color: #000000;
	}
	.swiper-button-prev,
	.swiper-rtl .swiper-button-next {
		z-index: 15;
		left: 25%;
		right: auto;
	}
	.swiper-button-next,
	.swiper-rtl .swiper-button-prev {
		z-index: 15;
		left: auto;
		right: 25%;
	}
	.swiper-button-prev::after,
	.swiper-button-next::after {
		font-size: 25px;
		color: ${({ theme }) => theme.colors.navy};
	}
`;
