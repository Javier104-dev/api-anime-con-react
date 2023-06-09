import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { BuscarAnime } from './BuscarAnime';
import AnimeSelecionado from './AnimeSeleccionado';
import { CacheProvider } from '../createContext/CacheContext';
import './App.css';

function App() {
  return (
    <section className='section'>
      <CacheProvider>
        <Router>
          <header className='titulo'>
            <NavLink className={"titulo__link"} to="/">Api Anime con React</NavLink>
          </header>
          <main>
          <Routes>
            <Route exact path="/" element={<BuscarAnime/>} />
            <Route exact path="/anime/:id/ver" element={<AnimeSelecionado/>}/>
          </Routes>
          </main>
        </Router>
      </CacheProvider>
    </section>
  );
}

export default App;
