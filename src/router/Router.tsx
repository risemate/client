import RootLayout from 'layout/RootLayout';
import UserLayout from 'layout/UserLayout';
import Home from 'pages/Home';
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
						element: <div>이력서 목록?</div>,
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
						element: <div>전문가 목록?</div>,
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
				element: <div>auth settings</div>,
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
