import AWS from 'aws-sdk';
import React from 'react';

export interface FileInfoType {
	url: string;
	name: string; // 파일 이름을 저장하는 속성 추가
}

interface ImageUploadProps extends React.HTMLProps<HTMLInputElement> {
	setUrl:
		| React.Dispatch<React.SetStateAction<FileInfoType[]>>
		| ((files: FileInfoType[]) => void);
	setPreview?:
		| React.Dispatch<React.SetStateAction<FileInfoType[]>>
		| ((files: FileInfoType[]) => void);
	multiple?: boolean;
	accept?: string;
}

export const ImageFileUpload = ({
	multiple = false,
	setUrl,
	setPreview,
	accept = '.png, .jpeg, .jpg',
	...props
}: ImageUploadProps) => {
	AWS.config.update({
		region: process.env.VITE_S3REGION,
		accessKeyId: process.env.VITE_S3ACCESS_KEY_ID,
		secretAccessKey: process.env.VITE_S3SECRET_ACCESS_KEY,
	});
	const s3 = new AWS.S3();
	const uploadFileToS3 = async (file: File): Promise<FileInfoType | null> => {
		const params = {
			Bucket: 'risemate-bucket',
			Key: `${Date.now()}.${file.name}`,
			Body: file,
			ACL: 'public-read',
			ContentType: 'image/jpeg',
		};

		try {
			const result = await s3.upload(params).promise();
			return { url: result.Location, name: file.name }; // 파일 이름과 URL을 반환하는 객체로 수정
		} catch (error) {
			console.error('Error uploading file to S3:', error);
			return null;
		}
	};

	const onChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.length === 0 || !e.target.files) return;
		const fileArr = Array.from(e.target.files);
		const updatedFiles: FileInfoType[] = [];
		const getPreview = async () => {
			const fileInfos: FileInfoType[] = [];
			for (const file of fileArr) {
				const fileRead = new FileReader();
				const promise = new Promise<string>((resolve, reject) => {
					fileRead.onload = () => {
						if (fileRead.result) {
							resolve(fileRead.result as string);
						} else {
							reject(new Error('File reading failed'));
						}
					};
				});

				fileRead.readAsDataURL(file);
				try {
					const url = await promise;
					fileInfos.push({ url, name: file.name }); // 파일 이름과 URL을 배열에 추가
				} catch (error) {
					console.error('Error reading file:', error);
				}
			}

			setPreview && setPreview(fileInfos);
		};

		setPreview && (await getPreview());
		for (const file of fileArr) {
			const fileInfo = await uploadFileToS3(file);
			fileInfo && updatedFiles.push(fileInfo);
		}

		setUrl && setUrl(updatedFiles);
	};

	return (
		<input
			type='file'
			id='file'
			multiple={multiple}
			accept={accept}
			onChange={onChangeFile}
			{...props}
		/>
	);
};
