import theme from '@styles/theme';
import RootLayout from 'layout/RootLayout';
import UserLayout from 'layout/UserLayout';
import CoachInfo from 'pages/CoachInfo';
import CoachManagement from 'pages/CoachManagement';
import ExpertDetail from 'pages/ExpertDetail';
import Experts from 'pages/Experts';
import Home from 'pages/Home';
import MyInfoPage from 'pages/MyInfo';
import Network from 'pages/Network';
import NotFound from 'pages/NotFound';
import Resume from 'pages/Resume';
import ResumeDetail from 'pages/ResumeDetail';
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
				path: 'networks',
				children: [
					{
						index: true,
						element: <Network />,
					},
					{
						path: 'resumes/:id',
						element: <ResumeDetail />,
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
						path: ':id',
						element: <ExpertDetail />,
					},
				],
			},
		],
		errorElement: <NotFound />,
	},

	{
		path: 'my-info',
		element: <UserLayout />,
		children: [
			{
				index: true,
				element: <MyInfoPage />,
			},
			{
				path: 'resumes',
				children: [
					{
						index: true,
						element: <Resume />,
					},
					{
						path: ':id',
						element: <ResumeDetail />,
					},
				],
			},
			{
				path: 'ai',
				element: <div>ai 코치</div>,
			},
		],
		loader: signLoader,
		errorElement: <NotFound />,
	},
	{
		path: 'coach-info',
		element: <UserLayout backgroundColor={theme.colors.grey} />,
		children: [
			{
				index: true,
				element: <CoachInfo />,
			},

			{
				path: 'management',
				element: <CoachManagement />,
			},
		],
		loader: signLoader,
		errorElement: <NotFound />,
	},
]);
