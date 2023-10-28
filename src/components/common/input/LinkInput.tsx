import { IconCloseSharp } from '@icons';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { Link as LinkType } from 'types/Resume';

import Button from '@common/Button';
import Input from '@common/input/Input';

interface LinkInputProps {
	links: LinkType[];
	index?: number;
	updateLinks: (index: number, field: 'links', value: LinkType[]) => void;
}

export default function LinkInput({ links, index, updateLinks }: LinkInputProps) {
	const [initialLink, setInitialLink] = useState('[linkTitle](linkUrl)');
	const linkToString = (link: LinkType) => {
		return `${link.linkTitle}: ${link.linkUrl}`;
	};

	const stringToLink = (linkString: string) => {
		const regex = /\[(.*?)\]\((.*?)\)/;
		const match = linkString.match(regex);
		if (match) {
			const linkTitle = match[1];
			const linkUrl = match[2];
			return { linkTitle, linkUrl };
		}
		return { linkTitle: '', linkUrl: linkString };
	};

	const changeLink = (event: ChangeEvent<HTMLInputElement>) => {
		setInitialLink(event.target.value);
	};

	const addLink = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newLinks = [...links, stringToLink(initialLink)];
		newLinks.sort((a, b) => {
			if (a.linkTitle < b.linkTitle) {
				return -1;
			}
			if (a.linkTitle > b.linkTitle) {
				return 1;
			}
			return 0;
		});
		if (index !== undefined) {
			updateLinks(index, 'links', newLinks);
		}
		setInitialLink('[linkTitle](linkUrl)');
	};

	const deleteLink = (itemIdx: number) => {
		const newLinks = [...links];
		newLinks.splice(itemIdx, 1);
		if (index !== undefined) {
			updateLinks(index, 'links', newLinks);
		}
	};

	return (
		<StyledLink>
			<form onSubmit={event => addLink(event)}>
				<Input
					label='Link'
					type='text'
					explanation='예시) [Github](https://www.github.com)'
					value={initialLink}
					onChange={changeLink}
				/>
				<Button variant='navy' size='small'>
					추가
				</Button>
			</form>
			<ul>
				{links.map((link, index) => (
					<li key={index}>
						{linkToString(link)}
						<button type='button' onClick={() => deleteLink(index)}>
							<IconCloseSharp />
						</button>
					</li>
				))}
			</ul>
		</StyledLink>
	);
}

const StyledLink = styled.div`
	form {
		position: relative;
		button {
			position: absolute;
			top: 22px;
			right: 0;
			height: 35px;
			border-radius: 0 10px 10px 0;
		}
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 10px;
		li {
			width: fit-content;
			background: ${({ theme }) => theme.colors.blue};
			color: white;
			padding: 7px 7px 7px 15px;
			border-radius: 5px;
			font-size: ${({ theme }) => theme.fontSizes.small};
			display: flex;
			align-items: center;
			button {
				color: white;
				margin-left: 10px;
			}
		}
	}
`;
