import { useParams } from "react-router-dom";
import useBuscarAnime from '../hooks/useBuscarAnime';
import { verUnAnime } from "../api/api";
import Cargando from "./Cargando";
import './AnimeSelecionado.css'

const AnimeSelecionado = () => {
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
      <section className="section__anime__seleccionado">
        <div className="anime__seleccionado">
          <span className="anime__seleccionado__titulo">{datos.title}</span>
          <img className="anime__seleccionado__imagen" src={datos.images.jpg.image_url} alt={datos.title}/>
          <p className="anime__seleccionado__sinopsis">{datos.synopsis}</p>
        </div>
      </section>
    )
  }
  
  return null;
}

export default AnimeSelecionado;