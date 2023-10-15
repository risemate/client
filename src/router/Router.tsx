import RootLayout from 'layout/RootLayout';
import UserLayout from 'layout/UserLayout';
import Experts from 'pages/Experts';
import Home from 'pages/Home';
import MyPage from 'pages/MyPage';
import Network from 'pages/Network';
import NotFound from 'pages/NotFound';
import Resume from 'pages/Resume';
import { createBrowserRouter } from 'react-router-dom';

import { signLoader } from './loader';

export const router = createBrowserRouter([
	//:layout별로 분리하면 좋을 듯?.
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'network',
				children: [
					{
						index: true,
						element: <Network />,
					},
					{
						path: '/network:id',
						element: <div>이력서</div>,
					},
				],
			},
			{
				path: 'experts',
				children: [
					{
						index: true,
						element: <Experts />,
					},
					{
						path: '/experts:id',
						element: <div>전문가</div>,
					},
				],
			},
		],
		errorElement: <NotFound />,
	},

	{
		path: '/',
		element: <UserLayout />,
		children: [
			{
				path: 'mypage',
				element: <MyPage />,
			},
			{
				path: 'resumes',
				element: <Resume />,
			},
			{
				path: 'ai',
				element: <div>ai 코치</div>,
			},
			{
				path: 'coaching',
				element: <div>코칭 관리</div>,
			},
		],
		loader: signLoader,
		errorElement: <NotFound />,
	},
]);
