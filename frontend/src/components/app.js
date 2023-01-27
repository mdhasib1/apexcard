import { Location, Redirect, Router } from '@reach/router';
import React from 'react';
import Header from './menu/header';
import ScrollToTopBtn from './menu/ScrollToTop';
import Accordion from './pages/accordion';
import Activity from './pages/activity';
import Alerts from './pages/alerts';
import Auction from './pages/Auction';
import Author from './pages/Author';
import Colection from './pages/colection';
import Contact from './pages/contact';
import Create from './pages/create';
import ElegantIcons from './pages/elegantIcons';
import EtlineIcons from './pages/etlineIcons';
import Explore from './pages/explore';
import Explore2 from './pages/explore2';
import FontAwesomeIcons from './pages/fontAwesomeIcons';
import Helpcenter from './pages/helpcenter';
import Home from './pages/home2';
import ItemDetail from './pages/ItemDetail';
import Login from './pages/login';
import LoginTwo from './pages/loginTwo';
import News from './pages/news';
import Price from './pages/price';
import Progressbar from './pages/progressbar';
import Rangking from './pages/rangking';
import Register from './pages/register';
import Tabs from './pages/tabs';
import Wallet from './pages/wallet';
import Works from './pages/works';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0,0), [location])
  return children
}

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <div key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </div>
      </div>
    )}
  </Location>
);

const app= () => (
  <div className="wraper">
  <GlobalStyles />
    <Header/>
      <PosedRouter>
      <ScrollTop path="/">
        <Home exact path="/">
          <Redirect to="/" />
        </Home>
        <Explore path="/explore" />
        <Explore2 path="/explore2" />
        <Helpcenter path="/helpcenter" />
        <Rangking path="/rangking" />
        <Colection path="/colection" />
        <ItemDetail path="/ItemDetail" />
        <Author path="/Author" />
        <Wallet path="/wallet" />
        <Login path="/login" />
        <LoginTwo path="/loginTwo" />
        <Register path="/register" />
        <Price path="/price" />
        <Works path="/works" />
        <News path="/news" />
        <Create path="/create" />
        <Auction path="/Auction" />
        <Activity path="/activity" />
        <Contact path="/contact" />
        <ElegantIcons path="/elegantIcons" />
        <EtlineIcons path="/etlineIcons" />
        <FontAwesomeIcons path="/fontAwesomeIcons" />
        <Accordion path="/accordion" />
        <Alerts path="/alerts" />
        <Progressbar path="/progressbar" />
        <Tabs path="/tabs" />
        </ScrollTop>
      </PosedRouter>
    <ScrollToTopBtn />
    
  </div>
);
export default app;