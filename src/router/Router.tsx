import RootLayout from 'layout/RootLayout';
import UserLayout from 'layout/UserLayout';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import { createBrowserRouter } from 'react-router-dom';

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
				path: '/resumes',
				children: [
					{
						index: true,
						element: <div>이력서 목록?</div>,
					},
					{
						path: '/resumes:id',
						element: <div>이력서</div>,
					},
				],
			},

			{
				path: '/experts',
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
		path: '/auth',
		element: <UserLayout />,
		children: [
			{
				path: '/auth',
				element: <div>auth home</div>,
			},
			{
				path: 'settings',
				element: <div>auth settings</div>,
			},
			{
				path: 'career',
				element: <div>career home</div>,
			},
		],
	},
]);
