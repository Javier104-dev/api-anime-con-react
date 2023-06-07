import { useContext, useEffect, useReducer } from "react"
import { CacheContext } from "../createContext/CacheContext";

const estadoInicial = {
  cargando: false,
  datos: null,
  error: null
}

const estadosReducer = (estado, action) => {
  const {tipo, carga} = action;

  switch (tipo) {
    case "CARGANDO":
      return {...estado, cargando: true, datos: null, error: null};
    case "ENCONTRADO":
      return {...estado, cargando: false, datos: carga, error: null};
    case "ERROR":
      return {...estado, cargando: false, datos: null, error: carga}
    default:
      return estado;
  }
}

const useBuscarAnime = (peticion, input, tiempo) => {
  const cache = useContext(CacheContext);
  const [estadoActual, dispatch] = useReducer(estadosReducer, estadoInicial);

  useEffect(() => {
    if (cache.estado[input]) {
      dispatch({ tipo: "ENCONTRADO", carga: cache.estado[input]});
      return;
    }

    const tiempoCarga = setTimeout( async () => {
      dispatch({ tipo: "CARGANDO" });
      try {
        const {data:datos} = await peticion(input);
        dispatch({ tipo: "ENCONTRADO", carga: datos });
        cache.dispatch({ tipo: "CREAR_CACHE", carga: { key: input, value: datos } });
      } catch (error) {
        dispatch({ tipo: "ERROR", carga: error });
      }
    }, tiempo)

    return () => {
      clearTimeout(tiempoCarga);
    };

  }, [peticion, cache, input, tiempo]);

  return estadoActual;
}

export default useBuscarAnime;