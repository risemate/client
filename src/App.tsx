import { ThemeProvider } from 'styled-components';

import Button from '@common/Button';
import GlobalNavBar from '@components/GlobalNavBar';

import useTab from '@hooks/useTab';

import { GlobalStyle } from '@assets/styles/GlobalStyle';
import theme from '@assets/styles/theme';

import 'normalize.css';

function App() {
	const tab = useTab(['a', 'b']);
	console.info(tab);
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Button variant='mint'>버튼</Button>
			<GlobalNavBar />
		</ThemeProvider>
	);
}

export default App;
