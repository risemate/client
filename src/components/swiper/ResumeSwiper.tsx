import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Career } from 'types/CareerDocument';

import CareerBasicCard from '@components/resume/Card/CareerBasicCard';
import ReviseCareerCard from '@components/resume/Card/ReviseCareerCard';

import 'swiper/css';
import 'swiper/css/navigation';

interface ResumeSwiperProps<T = any> {
	resumes: Career<T>[];
	isRevise?: boolean;
}

export default function ResumeSwiper({ resumes, isRevise = false }: ResumeSwiperProps) {
	return (
		<Swiper
			modules={[Navigation, Pagination]}
			spaceBetween={50}
			pagination={{ clickable: true }}
			slidesPerView={3}
			onSlideChange={() => console.log('slide change')}
			navigation
		>
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
	);
}
