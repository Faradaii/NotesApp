import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import HomePageWrapper from './pages/HomePage';
import ArchivedPageWrapper from './pages/ArchivedPage';
import DetailPageWrapper from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';

import Navigation from './components/Navigation'
import AddPageWrapper from './pages/AddPage';

function App() {
  let location = useLocation();
  return (
    <div className="container-app">
      <header className="sticky-header">
        <Navigation currentLocation={location.pathname}/>
      </header>
      <main className="main-section">
        <Routes>
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/archives" element={<ArchivedPageWrapper />} />
          <Route path="/notes/:id" element={<DetailPageWrapper />} />
          <Route path="/notes/add" element={<AddPageWrapper />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
