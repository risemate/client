import React, {
	ForwardedRef,
	TextareaHTMLAttributes,
	forwardRef,
	useEffect,
	useState,
} from 'react';
import styled from 'styled-components';

import HelperText from '@common/HelperText';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	warning?: string;
	help?: boolean;
	height?: number;
	// eslint-disable-next-line
	value?: any;
	wordLimit?: number;
}

const TextArea = forwardRef(function TextArea(
	{
		label,
		warning,
		help,
		height = 150,
		wordLimit,
		value = '',
		...TextAreaProps
	}: TextAreaProps,
	ref: ForwardedRef<HTMLTextAreaElement>,
) {
	const [wordCount, setWordCount] = useState(0);

	const handleWordCount = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const text = e.target.value;
		const count = text.length;
		setWordCount(count);
		if (TextAreaProps.onChange) TextAreaProps.onChange(e);
	};

	useEffect(() => {
		setWordCount(value.toString().length);
	}, [value]);

	return (
		<TextAreaLabel>
			<TitleWrapper>
				{label && <span>{label}</span>}
				{help && <HelperText text='해당 목록은 마크다운으로 작성할 수 있습니다.' />}
			</TitleWrapper>
			<StyledTextArea
				rows={6}
				ref={ref}
				$height={height}
				{...TextAreaProps}
				onChange={handleWordCount}
			/>
			<WordCount>
				{wordLimit && (
					<span>
						{wordCount}/{wordLimit}
					</span>
				)}
			</WordCount>
			{warning && <span className='warning'>{warning}</span>}
		</TextAreaLabel>
	);
});

const TextAreaLabel = styled.label`
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.darkGrey};
	display: flex;
	flex-direction: column;
	gap: 10px;
	.warning {
		color: red;
		padding-left: 10px;
	}
	span:last-child {
		word-break: break-all;
	}
`;

const StyledTextArea = styled.textarea<{ $height: number }>`
	border-radius: 10px;
	border: 0.5px solid ${({ theme }) => theme.colors.grey};
	padding: 15px;
	min-height: 35px;
	max-height: 500px;
	height: ${({ $height }) => `${$height}px`};
	line-height: 20px;
	resize: vertical;
	&::-webkit-scrollbar {
		background-color: white;
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.grey};
		border-radius: 10px;
		border: 4px solid white;
	}
`;

const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

const WordCount = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.darkGrey};
	text-align: right;
`;

export default TextArea;
