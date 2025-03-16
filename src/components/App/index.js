import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/global';
import defaultTheme from '../../assets/styles/themes/default';
import ContactsList from './ContactsList';
import {Container} from './styles'
import {Header} from './Header'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyles/>
         <Container>
            <Header/>
            <ContactsList/>
         </Container>
    </ThemeProvider>
  );
}

export default App;
