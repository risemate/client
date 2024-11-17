import WriteRevise from '@page/WriteRevise/WriteRevise';
import axios from 'axios';
import Admin from 'pages/Admin/Admin';
import Ai from 'pages/Ai/Ai';
import { ResumeList, ReviseList } from 'pages/Careers/Careers';
import CoachDocs from 'pages/CoachDocs/CoachDocs';
import CoachInfo from 'pages/CoachInfo/CoachInfo';
import CoachManagement from 'pages/CoachManagement/CoachManagement';
import CareerViewer, { ReviseResumeView } from 'pages/DocView/DocView';
import ExpertDetail from 'pages/ExpertDetail/ExpertDetail';
import ExpertForm from 'pages/ExpertForm/ExpertForm';
import Experts from 'pages/Experts/Experts';
import Home from 'pages/Home/Home';
import MyInfoPage from 'pages/MyInfo/MyInfo';
import MyProduct from 'pages/MyProduct/MyProduct';
import Network from 'pages/Network/Network';
import NotFound from 'pages/NotFound/NotFound';
import ReviseForm from 'pages/ReviseForm/ReviseForm';
import ReviseManagement from 'pages/ReviseManagement/ReviseManagement';
import PaymentExampleCom from 'pages/TestPayment';
import WritePage from 'pages/Write/Write';
import { createBrowserRouter } from 'react-router-dom';

import FormLayout from '@components/layout/FormLayout';
import RootLayout from '@components/layout/RootLayout';
import CoachingManager from '@components/management/TestManager';

import PrivateRoute from './PrivateRoute';

const token = localStorage.getItem('rm-checkpoint');
axios.defaults.baseURL = '/api';
axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.interceptors.response.use(
// 	response => response,
// 	error => {
// 		throw new Error(error.response?.data?.message || error.message);
// 	},
// );

export const router = createBrowserRouter([
	{
		path: 'admin',
		element: <PrivateRoute admin />,
		children: [
			{
				index: true,
				element: <Admin />,
			},
		],
	},
	// { path: 'test', element: <PaymentExampleCom /> },
	{ path: 'test', element: <CoachingManager /> },
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
				element: <PrivateRoute />,
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
						path: 'management',
						element: <ReviseManagement />,
					},
					{
						path: 'ai',
						element: <Ai />,
					},
				],
			},
			{
				path: 'write',
				element: <PrivateRoute />,
				children: [
					{
						index: true,
						element: <WritePage />,
					},
				],
			},
			{
				path: 'coach-info',
				element: <PrivateRoute expert />,
				children: [
					{
						index: true,
						element: <CoachInfo />,
					},

					{
						path: 'management',
						element: <CoachManagement />,
					},
					{
						path: 'docs',
						element: <CoachDocs />,
					},
					{
						path: 'product-docs',
						element: <MyProduct />,
					},
					{
						path: 'product-docs/:id',
						element: <ExpertDetail />,
					},
					{
						path: 'revise/:id',
						element: <WriteRevise />,
					},
				],
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
				element: <PrivateRoute />,
				children: [
					{
						index: true,
						element: <ExpertForm />,
					},
				],
			},
			{
				path: 'revise',
				element: <PrivateRoute />,
				children: [
					{
						index: true,
						element: <ReviseForm />,
					},
				],
			},
		],
		errorElement: <NotFound />,
	},
]);
