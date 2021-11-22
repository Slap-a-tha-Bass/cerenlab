import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import WhoWeAre from './views/WhoWeAre';
import Research from './views/Research';
import People from './views/People';
import News from './views/News';
import Resources from './views/Resources';
import NavBar from './components/NavBar';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/mission"
          element={<WhoWeAre />}
        />
        <Route
          path="/research"
          element={<Research />}
        />
        <Route
          path="/people"
          element={<People />}
        />
        <Route
          path="/news"
          element={<News />}
        />
        <Route
          path="/resources"
          element={<Resources />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
