import { queryClient } from '@queries/defaultQueryClient';
import { GlobalStyle } from '@styles/GlobalStyle';
import theme from '@styles/theme';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router/Router';
import { ThemeProvider } from 'styled-components';

import AuthModal from '@components/auth/AuthModal';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<QueryClientProvider client={queryClient}>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AuthModal />
			<RouterProvider router={router} />
		</ThemeProvider>
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>,
);
