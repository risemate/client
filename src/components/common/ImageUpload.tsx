import AWS from 'aws-sdk';
import React from 'react';

interface FileInfoType {
	url: string;
	image: boolean;
	video: boolean;
	file: File;
}

interface ImageUploadProps {
	setUrl: React.Dispatch<React.SetStateAction<string[]>> | ((url: string[]) => void);
	setPreview?: React.Dispatch<React.SetStateAction<string[]>> | ((url: string[]) => void);
	multiple?: boolean;
	accept?: string;
}
export const ImageFileUpload = ({
	multiple = false,
	setUrl,
	setPreview,
	accept = '.png, .jpeg, .jpg',
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

		const fileArr = Array.from(e.target.files);
		const updatedFiles: string[] = [];
		const getPrevew = async () => {
			const fileUrl: string[] = [];
			for (let i = 0; i < fileArr.length; i++) {
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

				fileRead.readAsDataURL(fileArr[i]);
				try {
					const url = await promise;
					fileUrl.push(url);
				} catch (error) {
					console.error('Error reading file:', error);
				}
			}

			setPreview && setPreview(fileUrl);
		};

		setPreview && (await getPrevew());
		for (const file of fileArr) {
			// 파일 업로드
			const location = await uploadFile(file);
			location && updatedFiles.push(location);
		}

		setUrl && setUrl(updatedFiles);
	};

	return (
		<input type='file' onChange={onChangeFile} multiple={multiple} accept={accept} />
	);
};
