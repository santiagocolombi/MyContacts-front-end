import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './styles';
import { Header } from './Header';
import Routes from '../../Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Container>
          <Header />
          <Routes />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
