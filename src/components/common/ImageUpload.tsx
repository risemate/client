import AWS from 'aws-sdk';
import React from 'react';

interface FileInfoType {
	url: string;
	image: boolean;
	video: boolean;
	file: File;
}

interface ImageUploadProps {
	multiple?: boolean;
	setFiles?: React.Dispatch<React.SetStateAction<string[]>> | ((url: string[]) => void);
	setFile?: React.Dispatch<React.SetStateAction<string>> | ((url: string) => void);
}
export const ImageFileUpload = ({
	multiple = false,
	setFiles,
	setFile,
}: ImageUploadProps) => {
	AWS.config.update({
		region: process.env.REACT_APP_S3REGION,
		accessKeyId: process.env.REACT_APP_S3ACCESS_KEY_ID,
		secretAccessKey: process.env.REACT_APP_S3SECRET_ACCESS_KEY,
	});
	const s3 = new AWS.S3();

	const uploadFile = async (file: File) => {
		const params = {
			Bucket: 'risemate-bucket',
			Key: `${Date.now()}.${file.name}`,
			Body: file,
			ACL: 'public-read',
			ContentType: 'image/jpeg',
		};
		try {
			const result = await s3.upload(params).promise();
			return result.Location;
		} catch (error) {
			console.error('Error uploading file:', error);
			return null;
		}
	};

	// const [files, setFiles] = useState<FileInfoType[]>([]);

	// 파일 선택 이벤트 핸들러
	const onChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;

		const fileList = Array.from(e.target.files);
		const updatedFiles: string[] = [];

		for (const file of fileList) {
			// 파일 업로드
			const location = await uploadFile(file);
			location && updatedFiles.push(location);
		}

		multiple && setFiles && setFiles(updatedFiles);
		!multiple && setFile && setFile(updatedFiles[0]);
	};

	return <input type='file' onChange={onChangeFile} multiple={multiple} />;
};
