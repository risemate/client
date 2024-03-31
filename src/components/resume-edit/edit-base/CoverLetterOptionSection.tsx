import { useSearchParam } from '@hooks/common/useSearchParam';
import { useFormContext } from 'react-hook-form';

import LinkInput from '@components/input/LinkInput';
import TextArea from '@components/input/TextArea';
import BaseSection from '@components/resume-edit/EditBaseSection';

import { DocTitleInput, InputWrapper, WarningText } from './Profile';

export default function CoverLetterOptionSection() {
	const { queryParam: careerType } = useSearchParam('redirect');

	const { register, control, watch } = useFormContext();
	const inputName = (key: string) => `doc.${key}`;
	return (
		<BaseSection>
			<BaseSection.Title title='추가정보'>
				<DocTitleInput>
					<span className='a11y-hidden'>문서 제목 입력</span>
					<input type='text' placeholder='문서 제목 입력' {...register('doc.docTitle')} />
				</DocTitleInput>
				<WarningText>* 내용이 없을 시 이력서에 표기되지 않습니다.</WarningText>
			</BaseSection.Title>
			<InputWrapper>
				<TextArea label='5줄 표현' help {...register('doc.description')} />
				<LinkInput
					links={watch('doc.links')}
					inputName={inputName('links')}
					label='Link - 졸업논문이나  증명자료를 추가해봐요~'
				/>
			</InputWrapper>
		</BaseSection>
	);
}
