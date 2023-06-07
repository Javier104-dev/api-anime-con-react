import React from 'react';
import { buscarAnime } from "../api/api";
import styled from '@emotion/styled'
import Cargando from './Cargando';
import useBuscarAnime from '../hooks/useBuscarAnime';
import { NavLink } from 'react-router-dom';

const ContenedorLista = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BuscarAnime = () => {
  const [input, setInput] = React.useState("");
  const {cargando, datos, error} = useBuscarAnime(buscarAnime, input, 500);

  return (
    <>
      <input value={input} onChange={(evento) => setInput(evento.target.value)}/>
      {cargando && <Cargando/>}
      {datos && (
        <ContenedorLista>
        {datos.map((anime) => (
          <NavLink key={anime.mal_id} to={`/anime/${anime.mal_id}/ver`}>
            <div>
              <div>{anime.title}</div>
              <img src={anime.images.jpg.image_url} alt={anime.title}/>
            </div>
          </NavLink>
        ))}
        </ContenedorLista>
      )}
      {error && <div>{error}</div>}
    </>
  );
};

export {
  BuscarAnime
}