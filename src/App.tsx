import { ThemeProvider } from 'styled-components';

import Button from '@common/Button';

import useTab from '@hooks/useTab';

import { GlobalStyle } from '@styles/GlobalStyle';
import theme from '@styles/theme';

import 'normalize.css';

function App() {
	const tab = useTab(['a', 'b']);
	console.info(tab);
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Button variant='mint'>버튼</Button>
		</ThemeProvider>
	);
}

export default App;
