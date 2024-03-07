import React, { useContext} from 'react';
import reactLogo from './assets/react.svg'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import './App.css'
import { BackToTop } from './components/BackToTop/BackToTop';
import { ThemeContext } from './contexts/ThemeContext';
import ScrollToTop from './utils/ScrollToTop'
import { Main } from './pages/Main/Main';
import { BlogPage } from './pages/Blog/BlogPage';
import { ProjectPage } from './pages/Project/ProjectPage';

function App() {

  const { theme } = useContext(ThemeContext);

  console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  console.log("%chttps://github.com/hhhrrrttt222111/developer-portfolio", `color:${theme.tertiary}; font-size:20px`);

  return (

    <div className="app">
      <BrowserRouter>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
      <BackToTop />
    </div>
  )
}

export default App
