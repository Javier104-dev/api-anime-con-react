import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { BuscarAnime } from './BuscarAnime';
import Anime from './VerAnime';
import { CacheProvider } from '../createContext/CacheContext';

function App() {
  return (
    <section>
      <CacheProvider>
        <Router>
          <header>
            <NavLink to="/">Api React</NavLink>
          </header>
          <main>
          <Routes>
            <Route exact path="/" element={<BuscarAnime/>} />
            <Route exact path="/anime/:id/ver" element={<Anime/>}/>
          </Routes>
          </main>
        </Router>
      </CacheProvider>
      <footer>
        Footer
      </footer>
    </section>
  );
}

export default App;
