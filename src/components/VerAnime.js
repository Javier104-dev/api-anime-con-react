import { useParams } from "react-router-dom";
import useBuscarAnime from '../hooks/useBuscarAnime';
import { verUnAnime } from "../api/api";
import Cargando from "./Cargando";

const Anime = () => {
  const {id} = useParams();
  const {cargando, datos, error} = useBuscarAnime(verUnAnime, id, 0);
  
  if (cargando) {
    return <Cargando/>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (datos) {
    return (
      <>
        <div>
          <span>{datos.title}</span>
          <img src={datos.images.jpg.image_url} alt={datos.title}/>
          <p>{datos.synopsis}</p>
        </div>
      </>
    )
  }
  
  return null;
}

export default Anime;