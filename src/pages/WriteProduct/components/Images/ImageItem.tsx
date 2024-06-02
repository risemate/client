import styled from 'styled-components';

import { FileInfoType } from '@common/ImageUpload';

import useImageDrage from './ImageItem.hook';

interface ImageItemProps {
	file: FileInfoType;
	index: number;
	moveItem: (dragIndex: number, hoverIndex: number) => void;
	remove: () => void;
}

export default function ImageItem({ file, index, moveItem, remove }: ImageItemProps) {
	const {
		dnd: { ref, handlerId, drag, drop },
	} = useImageDrage(file.name, index, moveItem);
	drag(drop(ref));

	return (
		<ImageWrap ref={ref} data-handler-id={handlerId}>
			<img src={file.url} alt='image' />
			<span className='hover-layer' />
			<button className='del' onClick={remove}>
				☒
			</button>
		</ImageWrap>
	);
}

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
