import { IconCircleUser } from '@icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ProfileMenu() {
	const navigate = useNavigate();
	const [menuVisible, setMenuVisible] = useState(false);

	const showMenu = () => setMenuVisible(true);
	const hideMenu = () => setMenuVisible(false);

	return (
		<MenuWrap onMouseLeave={hideMenu}>
			<div className='user'>
				<button
					type='button'
					onClick={() => navigate('/my-info')}
					onMouseEnter={showMenu}
				>
					<IconCircleUser />
				</button>
			</div>
			{menuVisible && (
				<div className='menu' onMouseEnter={showMenu} onMouseLeave={hideMenu}>
					<ul>
						<li>
							<button onClick={() => navigate('/my-home')}>내 정보</button>
						</li>
						<li>
							<button onClick={() => navigate('/my-home')}>내 커리어</button>
						</li>
						<li>
							<button onClick={() => navigate('/my-home')}>첨삭 관리</button>
						</li>
						<li>
							<button onClick={() => navigate('/my-home')}>결제 내역</button>
						</li>
						<li>
							<button onClick={() => navigate('/my-home')}>정보 수정</button>
						</li>
						<li>
							<button onClick={() => navigate('/my-home')}>로그아웃</button>
						</li>
					</ul>
				</div>
			)}
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
`;
