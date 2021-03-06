import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import { StoreProvider } from './utils/GlobalState';
const URL = process.env.PUBLIC_URL; //for use on gh pages

function App() {
  console.log('URL ', URL);
  console.log('process.env ', process.env);
  return (
    <Router>
      <div>
        <StoreProvider>
          <NavBar />
          <Switch>
            <Route exact path= {URL + '/'} component={Home} />
            <Route exact path= {URL + '/portfolio'} component={Portfolio} />
          </Switch>
          <Footer />
        </StoreProvider>
      </div>
    </Router>
  );
};
export default App;
