import { isEmpty } from '@utils/helpers';
import ReviseCareerCard from 'pages/Careers/components/ReviseList/ReviseCareerCard';
import { useParams } from 'react-router-dom';
import { css } from 'styled-components';

import Empty from '@common/Empty';
import WhiteBoxWrapper from '@components/base-wrappers/WhiteBoxWrapper';
import Container from '@components/layout/Container';
import SingleAsyncWrapper from '@components/suspense/async-wrapper/SingleAsyncWrapper';

import useReviseList from './ReviseList.hook';

export default function ReviseList() {
	const { parentId } = useParams();
	const { reviseResumes, to } = useReviseList(parentId || '');
	return (
		<Container backgroundColor='lightGrey' center padding>
			<h2 className='a11y-hidden'>첨삭 이력서 목록</h2>
			<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle}>
				<h3>첨삭 이력서</h3>
				<SingleAsyncWrapper>
					{isEmpty(reviseResumes) ? (
						<Empty btnText='AI 첨삭받기' onClick={() => to('ai')}>
							아직 첨삭받은 이력서가 없습니다
						</Empty>
					) : (
						<ul>
							{reviseResumes.map(resume => (
								<li key={resume._id}>
									<ReviseCareerCard career={resume} />
								</li>
							))}
						</ul>
					)}
				</SingleAsyncWrapper>
			</WhiteBoxWrapper>
		</Container>
	);
}

const resumeWrapperStyle = css`
	min-height: 500px;
	padding: 50px;
	display: flex;
	flex-direction: column;
	h3 {
		color: ${({ theme }) => theme.colors.navy};
		font-weight: bold;
		font-size: ${({ theme }) => theme.fontSizes.medium};
		margin-bottom: 30px;
	}
	ul {
		display: flex;
		gap: 23px;
		flex-wrap: wrap;
	}
`;
