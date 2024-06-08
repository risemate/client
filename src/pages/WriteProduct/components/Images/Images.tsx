import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';

import DefaultImage from '@common/DefaultImage';
import { FileInfoType, ImageFileUpload } from '@common/ImageUpload';
import EditBaseSection from '@components/resume-edit/EditBaseSection/EditBaseSection';

import useImages from './Image.hook';
import useImageDrage from './ImageItem.hook';

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

interface ImageItemProps {
	file: FileInfoType;
	index: number;
	moveItem: (dragIndex: number, hoverIndex: number) => void;
	remove: () => void;
}

const ImageItem = ({ file, index, moveItem, remove }: ImageItemProps) => {
	const {
		dnd: { ref, handlerId, drag, drop },
	} = useImageDrage(file.name, index, moveItem);
	drag(drop(ref));

	return (
		<ImageWrap ref={ref} data-handler-id={handlerId}>
			<img src={file.url} alt='image' />
			<span className='hover-layer' />
			<button className='del' onClick={remove} type='button'>
				☒
			</button>
		</ImageWrap>
	);
};

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

const ImageWrap = styled.div`
	border-radius: 10px;
	position: relative;
	width: 210px;
	img {
		border-radius: 10px;
		border: solid 1px gray;
		width: 210px;
		height: 210px;
		object-fit: contain;
	}
	.hover-layer {
		border-radius: 10px;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		display: none;
		background-color: #161616bc;
		color: #fff;
		cursor: move;
	}
	.del {
		position: absolute;
		top: 10px;
		right: 10px;
		color: #fff;
		z-index: 1;
		cursor: pointer;
	}
	&:hover {
		.hover-layer {
			display: block;
		}
	}
`;
