import React from 'react';

import Empty from '@common/Empty';
import ResumeNav from '@common/ResumeNav';

export default function Resume() {
	const resumeNavItems = [
		{ name: '이력서 작성', onClick: () => alert('hi') },
		{ name: '이력서 수정', onClick: () => alert('hi') },
		{ name: '이력서 작성', onClick: () => alert('hi') },
	];
	return (
		<>
			<div className='border'>
				<h2>hello</h2>
				<h2 className='underline'>hello</h2>
			</div>
			<div>
				<h1>hello</h1>
			</div>
			<div>
				<Empty name='전문가 게시물이' moveToLink={() => alert('hello')} />
			</div>
			<ResumeNav resumeNavItems={resumeNavItems} />
		</>
	);
}
