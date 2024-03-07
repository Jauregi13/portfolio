import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import reportWebVitals from './reportWebVitals';
import { ThemeContext, ThemeContextProvider } from './contexts/ThemeContext.jsx';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const MainApp = () => {

  const themeContextValue = useContext(ThemeContext)
  const themeFromContext = themeContextValue.theme

  const theme = createTheme({
    ...themeFromContext
  })

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )

}



ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <MainApp />
  </ThemeContextProvider>
)

reportWebVitals();