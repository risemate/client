import theme from '@styles/theme';
import axios from 'axios';
import RootLayout from 'layout/RootLayout';
import UserLayout from 'layout/UserLayout';
import Ai from 'pages/Ai';
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

const token = localStorage.getItem('rm-checkpoint');
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common.Authorization = `Bearer ${token}`;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const router = createBrowserRouter([
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
				element: <Ai />,
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
