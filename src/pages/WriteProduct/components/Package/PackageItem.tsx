import { IconDelete, IconPlus } from '@icons';
import styled from 'styled-components';
import { PackageCategory } from 'types/coach/product';

import Input from '@components/input/Input';
import TextArea from '@components/input/TextArea';
import EditBaseSection from '@components/resume-edit/EditBaseSection';

import usePackageItem from './PackageItem.hook';

interface PackageItemProps {
	category: PackageCategory;
}

export default function PackageItem({ category }: PackageItemProps) {
	const { packageTitle, price, description, providerOptions, disableAdd } =
		usePackageItem(category);
	return (
		<EditBaseSection.Content gridColumn='3' title={category}>
			<EditBaseSection.Item>
				<TitlePriceLayout>
					<Input label='패키지 이름' {...packageTitle} />
					<Input label='패키지 가격' {...price} />
				</TitlePriceLayout>
			</EditBaseSection.Item>
			<EditBaseSection.Item gridColumn='2/4'>
				<TextArea label='설명' {...description} height={115} help />
			</EditBaseSection.Item>
			<EditBaseSection.Item gridColumn='1/4'>
				<OptionsTitleWrapper $disableAdd={disableAdd}>
					<span>옵션</span>
					<span>최대 10개까지 추가할 수 있습니다.</span>
					<button type='button' onClick={providerOptions.append} disabled={disableAdd}>
						<IconPlus />
					</button>
				</OptionsTitleWrapper>
				<ul>
					{providerOptions.fields.map((_, index) => (
						<OptionListItem key={index}>
							<Input label={`옵션 ${index + 1} 이름`} {...providerOptions.name(index)} />
							<Input
								label={`옵션 ${index + 1} 설명`}
								{...providerOptions.description(index)}
							/>
							<button type='button' onClick={() => providerOptions.remove(index)}>
								<IconDelete />
							</button>
						</OptionListItem>
					))}
				</ul>
			</EditBaseSection.Item>
		</EditBaseSection.Content>
	);
}

const TitlePriceLayout = styled.div`
	margin-top: 7px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const OptionsTitleWrapper = styled.div<{ $disableAdd: boolean }>`
	width: 100%;
	display: flex;
	align-items: end;
	margin: 10px 0;
	gap: 10px;
	span {
		color: ${({ theme }) => theme.colors.darkGrey};
		font-weight: bold;
	}
	span:nth-child(2) {
		font-size: ${({ theme }) => theme.fontSizes.small};
		font-weight: 400;
	}
	button {
		margin-left: auto;
		svg {
			color: ${({ $disableAdd, theme }) =>
				$disableAdd ? theme.colors.lightGrey : theme.colors.darkGrey};
		}
	}
`;

const OptionListItem = styled.li`
	display: flex;
	gap: 20px;
	margin-top: 20px;
	align-items: end;
	& > label:nth-child(2) {
		width: 100%;
	}
	svg {
		color: ${({ theme }) => theme.colors.grey};
		width: 30px;
		height: 30px;
	}
	button:hover svg {
		color: ${({ theme }) => theme.colors.darkGrey};
	}
`;
