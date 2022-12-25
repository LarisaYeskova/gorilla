import { ThemeProvider } from '@mui/material';
import './App.css';
import Main from './components/Main';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
