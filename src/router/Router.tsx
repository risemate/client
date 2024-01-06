import theme from '@styles/theme';
import axios from 'axios';
import Ai from 'pages/Ai';
import CoachInfo from 'pages/CoachInfo';
import CoachManagement from 'pages/CoachManagement';
import { ResumeView, ReviseResumeView } from 'pages/DocView';
import ExpertDetail from 'pages/ExpertDetail';
import Experts from 'pages/Experts';
import Home from 'pages/Home';
import MyInfoPage from 'pages/MyInfo';
import Network from 'pages/Network';
import NotFound from 'pages/NotFound';
import { ResumeList, ReviseList } from 'pages/Resume';
import ResumeEdit from 'pages/ResumeEdit';
import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '@components/layout/RootLayout';

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
						path: 'docs/:id',
						element: <ResumeView />,
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
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <MyInfoPage />,
			},
			{
				path: 'docs',
				children: [
					{
						index: true,
						element: <ResumeList />,
					},
					{
						path: ':id',
						element: <ResumeView />,
					},
					{
						path: ':parentId/revise-docs',
						element: <ReviseList />,
					},
					{
						path: ':parentId/revise-docs/:childrenId',
						element: <ReviseResumeView />,
					},
					{
						path: ':id/edit',
						element: <ResumeEdit />,
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
		element: <RootLayout backgroundColor={theme.colors.grey} />,
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
