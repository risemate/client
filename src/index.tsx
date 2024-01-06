import { GlobalStyle } from '@styles/GlobalStyle';
import theme from '@styles/theme';
import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'jotai';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router/Router';
import { queryClient } from '@queries/defaultQueryClient';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<QueryClientProvider client={queryClient()}>
		<Provider>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<RouterProvider router={router} />
			</ThemeProvider>
		</Provider>
	</QueryClientProvider>,
);
