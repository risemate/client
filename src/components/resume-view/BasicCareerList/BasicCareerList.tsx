import { isEmpty } from '@utils/helpers';
import { ElementType } from 'react';
import styled from 'styled-components';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardComponentProps } from 'types/cardComponent';

import Empty from '@common/Empty';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// eslint-disable-next-line
interface BasicResumeListProps<T = any> {
	title?: string;
	resumes: T[];
	CardComponent: ElementType<CardComponentProps<T>>;
	addNew?: boolean;
	createTo?: 'co' | 're' | 'pr';
	updateSelectedId?: (id: string | null) => void;
	selectedId?: string | null;
}

export default function BasicCareerList({
	resumes,
	CardComponent,
	createTo,
	selectedId = null,
	updateSelectedId,
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
		<BasicResumeListWrapper>
			{isEmpty(resumes) ? (
				<Empty>불러올 데이터가 없습니다</Empty>
			) : (
				<Swiper {...setting}>
					{resumes.map(resume => (
						<SwiperSlide key={resume._id}>
							<CardComponent
								careerType={createTo === 're' ? 'RESUME' : 'COVERLETTER'}
								career={resume}
								selectedId={selectedId}
								updateSelectedId={updateSelectedId}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</BasicResumeListWrapper>
	);
}

const BasicResumeListWrapper = styled.div`
	.swiper {
		width: 100%;
		padding-bottom: 50px;
	}
	/* .swiper-wrapper {
		padding: 5px;
	} */
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
