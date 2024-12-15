import { useModal } from '@hooks/atoms/useModalAtom';
import {
	coachingChatMutation,
	coachingExpertDoneMutation,
	coachingUserDoneMutation,
} from '@queries/coaching';
import { authQuery } from '@queries/user';
import { useQuery } from '@tanstack/react-query';
import React, { useCallback, useId, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { CoachingResponse } from 'types/coach/coaching';

import Button from '@common/Button';
import HelperText from '@common/HelperText';
import Modal from '@components/modal/base/Modal';

function Chat({ data }: { data: CoachingResponse }) {
	const [content, setContent] = useState<string>('');
	const { data: auth } = authQuery();
	const isExpert = auth?._id === data.expert._id;
	const coachingDoneMutation = isExpert
		? coachingExpertDoneMutation(data._id)
		: coachingUserDoneMutation(data._id);
	const chatMutation = coachingChatMutation(data._id);

	const submitCoachingDone = useCallback(() => {
		if (!content) {
			toast.warn('내용을 입력해주세요');
			alert('내용을 입력해주세요');
			return;
		}
		coachingDoneMutation.mutateAsync({ message: content }).then(() => {
			toast.success('성공적으로 처리되었습니다!');
			setContent('');
		});
	}, [content]);

	const submitChat = useCallback(() => {
		if (!content) {
			toast.warn('내용을 입력해주세요');
			alert('내용을 입력해주세요');
			return;
		}
		chatMutation
			.mutateAsync({ message: content, role: 'CHAT' })
			.then(() => {
				toast.success('전송되었습니다.');
				setContent('');
			})
			.catch(() => {
				toast.error('처리에 실패했습니다.');
			});
	}, [content]);

	return (
		<Modal
			title={`@${data.user.name} 님과의 챗`}
			queryKey={`${data._id}-coaching-community`}
			isButtons={false}
			isOutsideClick={false}
		>
			<Wrap>
				<div className='chat_wrap'>
					{data.chat.map(chat => {
						if (!chat.content || chat.content === '') {
							return null;
						}
						if (chat.role === 'SYSTEM') {
							return (
								<div className='center content' key={chat._id}>
									<p>{chat.content}</p>
								</div>
							);
						} else if (chat._id === auth?._id) {
							return (
								<div className='right content' key={chat._id}>
									<p>{chat.content}</p>
								</div>
							);
						} else {
							return (
								<div className='left content' key={chat._id}>
									<p>{chat.content}</p>
								</div>
							);
						}
					})}
				</div>
				<div>
					<textarea
						rows={2}
						placeholder='내용을 입력해주세요'
						onChange={e => setContent(e.target.value)}
						value={content}
					/>
					<div className='btn_group'>
						<Button
							type='submit'
							size='small'
							variant='border'
							onClick={submitCoachingDone}
							disabled={isExpert ? data.expertCompleted : data.userCompleted}
						>
							{isExpert && data.expertCompleted && (
								<HelperText text='상대방이 완료하여야 종료됩니다.' />
							)}
							첨삭완료
						</Button>
						<Button
							size='small'
							variant='border'
							type='submit'
							onClick={submitChat}
							disabled={data.userCompleted}
						>
							보내기
						</Button>
					</div>
				</div>
			</Wrap>
		</Modal>
	);
}

export default Chat;

const Wrap = styled.div`
	.chat_wrap {
		background: ${({ theme }) => theme.colors.lighterGrey};
		min-height: 300px;
		margin-bottom: 20px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 10px;
	}

	.content {
		display: flex;
		width: 100%;
		p {
			padding: 10px;
			border-radius: 10px;
			color: #000;
		}
	}

	.right {
		justify-content: right;
		p {
			width: fit-content;
			color: white;
			background-color: ${({ theme }) => theme.colors.navy};
		}
	}
	.left {
		justify-content: left;
		p {
			width: fit-content;
			color: white;
			background-color: ${({ theme }) => theme.colors.blue};
		}
	}

	.center {
		justify-content: center;
		p {
			width: 100%;
			background-color: ${({ theme }) => theme.colors.grey};
			text-align: center;
		}
	}
	textarea {
		width: 100%;
		padding: 10px;
		line-height: 1.3;
		border-radius: 5px;
		margin-bottom: 10px;
		border-color: ${({ theme }) => theme.colors.grey};
	}
	.btn_group {
		display: flex;
		/* justify-content: end; */
		justify-content: space-between;
	}
`;
