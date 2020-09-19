import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/core/Header';
import Footer from './components/core/Footer';

import Home from './components/home/Home';
import SearchPage from './components/search/SearchPage';
import Publish from './components/publish/Publish';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/publish" component={Publish} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
