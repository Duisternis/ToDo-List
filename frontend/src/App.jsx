import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css'
import Home from './pages/Home'
import { ToastProvider } from './context/useToast';
import { SnackbarProvider } from 'notistack';
import { UserProvider } from './context/useAuth';

const theme = createTheme({
    typography: {
        fontFamily: "Ropa Sans, sans-serif",
    },
    colorSchemes: {
        dark: true,
    },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={4}>
            <ToastProvider>
                <UserProvider>
                    <Home />
                </UserProvider>
            </ToastProvider>
        </SnackbarProvider>
    </ThemeProvider>
  )
}

export default App
