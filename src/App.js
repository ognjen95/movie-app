import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from './components/layout/NavBar';
import store from './store';
import Landing from './components/home/Landing';
import Movie from './components/home/Movie';
import MovieList from './components/home/MovieList';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          {/* <Landing /> */}
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/movies" component={MovieList} />
            <Route component={Movie} exact path="/movie/:id" />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
