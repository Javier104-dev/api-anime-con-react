import React from 'react';
import { buscarAnime } from "../api/api";
import styled from '@emotion/styled'
import Cargando from './Cargando';
import useBuscarAnime from '../hooks/useBuscarAnime';

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
        {datos.data.map((anime) => (
          <div key={anime.mal_id}>
            <div>{anime.title}</div>
            <img src={anime.images.jpg.image_url}  />
          </div>
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