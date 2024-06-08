import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';

import DefaultImage from '@common/DefaultImage';
import { ImageFileUpload } from '@common/ImageUpload';
import EditBaseSection from '@components/resume-edit/EditBaseSection/EditBaseSection';

import ImageItem from './ImageItem';
import useImages from './Images.hook';

export default function Images() {
	const { images, moveItem, setImages, remove } = useImages();
	return (
		<EditBaseSection>
			<EditBaseSection.Title title='이미지' />
			<FileWrap>
				<DndProvider backend={HTML5Backend}>
					{images?.map((file, index) => (
						<ImageItem
							key={index}
							index={index}
							file={file}
							moveItem={moveItem}
							remove={() => remove(index)}
						></ImageItem>
					))}
				</DndProvider>
				<label htmlFor='image-file'>
					<DefaultImage size='large' variant='navy' />
					<AddButton>사진 추가</AddButton>
				</label>
				<ImageFileUpload
					setUrl={setImages}
					// setPreview={setPreview}
					id='image-file'
					multiple
				/>
			</FileWrap>
		</EditBaseSection>
	);
}

const FileWrap = styled.div`
	input {
		display: none;
	}
	height: fit-content;

	label {
		position: relative;
		display: inline-block;
		cursor: pointer;
		width: fit-content;
	}
	display: flex;
	gap: 15px;
`;

const AddButton = styled.div`
	border-radius: 10px;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: #8080805e;
	display: flex;
	justify-content: center;
	color: #ffffff;
	padding-top: 150px;
	font-weight: bold;
	transition: padding-top 0.3s; /* 애니메이션 속성 추가 */

	&:hover {
		background-color: #161616bc;
		padding-top: 100px;
	}
`;
