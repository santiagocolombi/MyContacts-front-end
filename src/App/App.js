import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/global'
import defaultTheme from '../../assets/styles/themes/default'


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyles/>
        <h1>Mycontacts</h1>
    </ThemeProvider>
  );
}

export default App;
