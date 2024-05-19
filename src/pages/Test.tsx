import { useState } from 'react';

import { FileInfoType, ImageFileUpload } from '@common/ImageUpload';

function Test() {
	const [files, setFiles] = useState<FileInfoType[]>([]);
	const [preview, setPreview] = useState<FileInfoType[]>([]);
	return (
		<div>
			{/* <BtnUpload /> */}
			<ImageFileUpload setUrl={setFiles} multiple setPreview={setPreview} />
			{preview?.map(file => <img key={file.name} src={file.url} />)}
		</div>
	);
}

export default Test;
