import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './contexts/ThemeContext.jsx';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
)

reportWebVitals();