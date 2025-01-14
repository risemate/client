import { useModal } from '@hooks/atoms/useModalAtom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import DefaultImage from '@common/DefaultImage';
import LogoutModal from '@components/modal/LogoutModal';

interface ProfileMenuProps {
	picture?: string;
}

function ProfileMenu({ picture }: ProfileMenuProps) {
	const navigate = useNavigate();
	const [menuVisible, setMenuVisible] = useState(false);

	const showMenu = () => setMenuVisible(true);
	const hideMenu = () => setMenuVisible(false);
	const { openModal: openLogoutModal } = useModal('logout');

	return (
		<MenuWrap onMouseLeave={hideMenu}>
			<div className='user'>
				<button
					type='button'
					onClick={() => navigate('/my-info')}
					onMouseEnter={showMenu}
				>
					<DefaultImage variant='grey' shape='circle' size='tiny' image={picture} />
				</button>
			</div>
			{menuVisible && (
				<div className='menu' onMouseEnter={showMenu} onMouseLeave={hideMenu}>
					<ul>
						<li>
							<button onClick={() => navigate('/my-info')}>내 정보</button>
						</li>
						<li>
							<button onClick={() => navigate('/my-info/docs')}>내 커리어</button>
						</li>
						<li>
							<button onClick={() => navigate('/my-info/management')}>첨삭 관리</button>
						</li>
						<li>
							<button onClick={() => navigate('/my-info?mode=payment')}>결제 내역</button>
						</li>
						<li>
							<button onClick={() => navigate('/my-info?mode=edit')}>정보 수정</button>
						</li>
						<li>
							<button onClick={openLogoutModal}>로그아웃</button>
						</li>
					</ul>
				</div>
			)}
			<LogoutModal />
		</MenuWrap>
	);
}

export default ProfileMenu;

const MenuWrap = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	align-items: center;
	padding-inline: 10px;

	.user {
		display: inline-block;
	}

	.menu {
		background-color: #fff;
		border: solid 1px #e7e7e7;
		border-radius: 10px;
		padding: 10px 0;
		width: 150px;
		height: fit-content;
		position: absolute;
		top: 60px;
		right: -30px;
	}

	ul > li {
		padding: 10px 15px;
		cursor: pointer;
		transition: background-color 0.2s ease;
		&:hover {
			background-color: aliceblue;
		}
	}
	/* 
	img {
		height: 30px;
		width: 30px;
		border-radius: 50%;
	} */
`;
