import { isEmpty } from '@utils/helpers';
import { useParams } from 'react-router-dom';
import { css } from 'styled-components';

import Empty from '@common/Empty';
import SingleAsyncWrapper from '@components/async-wrapper/SingleAsyncWrapper';
import WhiteBoxWrapper from '@components/wrappers/WhiteBoxWrapper';

import BasicCareerList from '../BasicCareerList';
import useResume from '../ResumeList/CareerList.hook';
import useReviseList from './ReviseList.hook';

export default function ReviseList() {
	const { parentId } = useParams();
	const { reviseResumes } = useReviseList(parentId || '');
	const { to } = useResume();
	return (
		<>
			<h2 className='a11y-hidden'>첨삭 이력서 목록</h2>
			<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle}>
				<SingleAsyncWrapper>
					{isEmpty(reviseResumes) ? (
						<Empty btnText='AI 첨삭받기' onClick={() => to('ai')}>
							아직 첨삭받은 이력서가 없습니다
						</Empty>
					) : (
						<BasicCareerList title='첨삭 이력서' resumes={reviseResumes} isRevise />
					)}
				</SingleAsyncWrapper>
				`
			</WhiteBoxWrapper>
		</>
	);
}

const resumeWrapperStyle = css`
	min-height: 500px;
	padding: 50px;
`;
