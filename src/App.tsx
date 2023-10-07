import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import theme from './assets/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
