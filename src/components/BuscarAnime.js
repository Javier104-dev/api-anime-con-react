import React from 'react';
import { buscarAnime } from "../api/api";
import Cargando from './Cargando';
import useBuscarAnime from '../hooks/useBuscarAnime';
import { NavLink } from 'react-router-dom';
import "./BuscarAnime.css";


const BuscarAnime = () => {
  const [input, setInput] = React.useState("");
  const {cargando, datos, error} = useBuscarAnime(buscarAnime, input, 500);

  return (
    <section className='section__animes'>
      <div className='animes__buscar'>
        <span className='animes__buscar__titulo'>Buscar Anime</span>
        <input value={input} onChange={(evento) => setInput(evento.target.value)}/>
      </div>
      <div>
        {cargando && <Cargando/>}
        {datos && (
          <div className='animes__lista'>
          {datos.map((anime) => (
            <div key={anime.mal_id} className='animes__lista__item'>
              <NavLink className='anime__item' to={`/anime/${anime.mal_id}/ver`}>
                <div className='anime__item__titulo'>{anime.title}</div>
                <img src={anime.images.jpg.image_url} alt={anime.title}/>           
              </NavLink>
            </div>
          ))}
          </div>
        )}
        {error && <div>{error}</div>}
      </div>

    </section>
  );
};

export {
  BuscarAnime
}