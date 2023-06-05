import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <section>
      <Router>
        <header>
          <NavLink to="/">Api React</NavLink>
        </header>
        <main>
        <Routes>
          <Route exact path="/" element={<About/>} />
          <Route path="/prueba2" element={<Prueba2/>} />
        </Routes>
        </main>
      </Router>
      <footer>
        Footer
      </footer>
    </section>
  );
}

function Prueba2() {
  return <div>Prubea2</div>
}

function About() {
  return (
    <div>
      Home Page
    </div>
  );
}

export default App;
