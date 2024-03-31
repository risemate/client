import axios from 'axios';
import Ai from 'pages/Ai';
import { ResumeList, ReviseList } from 'pages/Careers';
import CoachInfo from 'pages/CoachInfo';
import CoachManagement from 'pages/CoachManagement';
import CareerViewer, { ReviseResumeView } from 'pages/DocView';
import ExpertDetail from 'pages/ExpertDetail';
import ExpertForm from 'pages/ExpertForm';
import Experts from 'pages/Experts';
import Home from 'pages/Home';
import MyInfoPage from 'pages/MyInfo';
import Network from 'pages/Network';
import NotFound from 'pages/NotFound';
import WritePage from 'pages/Write';
import { createBrowserRouter } from 'react-router-dom';

import FormLayout from '@components/layout/FormLayout';
import RootLayout from '@components/layout/RootLayout';

import { signLoader } from './loader';

const token = localStorage.getItem('rm-checkpoint');
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.response.use(
	response => response,
	error => {
		throw new Error(error.response?.data?.message || error.message);
	},
);

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
						element: <CareerViewer />,
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

			{
				path: 'my-info',
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
								element: <CareerViewer />,
							},
							{
								path: ':parentId/revise-docs',
								element: <ReviseList />,
							},
							{
								path: ':parentId/revise-docs/:childrenId',
								element: <ReviseResumeView />,
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
				path: 'write',
				element: <WritePage />,
			},
			{
				path: 'coach-info',
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
		],
		errorElement: <NotFound />,
	},
	{
		path: '/form',
		element: <FormLayout />,
		children: [
			{
				path: 'expert',
				children: [
					{
						index: true,
						element: <ExpertForm />,
					},
				],
			},
			{
				path: 'revise',
				children: [
					{
						index: true,
						element: <Network />,
					},
				],
			},
		],
	},
]);
