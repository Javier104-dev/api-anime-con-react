import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { BuscarAnime } from './BuscarAnime';

function App() {
  return (
    <section>
      <Router>
        <header>
          <NavLink to="/">Api React</NavLink>
        </header>
        <main>
        <Routes>
          <Route exact path="/" element={<BuscarAnime/>} />
        </Routes>
        </main>
      </Router>
      <footer>
        Footer
      </footer>
    </section>
  );
}

export default App;
