import React from 'react';
import styled from 'styled-components';

import TextArea from '@common/input/TextArea';

export default function CoverLetter() {
	return (
		<StyledCoverLetter>
			<label>
				<span className='a11y-hidden'>제목을 입력주세요</span>
				<input
					type='text'
					placeholder='제목을 입력주세요'
					// value={profile.resumeTitle}
					// onChange={event => handleInputChange('resumeTitle', event.target.value)}
				/>
			</label>
			<TextArea label='내용' help />
		</StyledCoverLetter>
	);
}

const StyledCoverLetter = styled.section`
	padding: 40px;
	label {
		margin-bottom: 20px;
		input {
			color: ${({ theme }) => theme.colors.navy};
			font-weight: bold;
			font-size: ${({ theme }) => theme.fontSizes.medium};
			padding: 10px 5px;
			width: 100%;
			border-bottom: 2px solid ${({ theme }) => theme.colors.navy};
		}
		& > div {
			margin-top: 20px;
		}
		& > textarea {
			height: 200px;
		}
	}
`;
