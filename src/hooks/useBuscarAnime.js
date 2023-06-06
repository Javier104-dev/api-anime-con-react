import { useEffect, useReducer } from "react"

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
  const [estadoActual, dispatch] = useReducer(estadosReducer, estadoInicial);

  useEffect(() => {
    const tiempoCarga = setTimeout( async () => {
      dispatch({ tipo: "CARGANDO" });
      try {
        const datos = await peticion(input);
        dispatch({ tipo: "ENCONTRADO", carga: datos });
      } catch (error) {
        dispatch({ tipo: "ERROR", carga: error });
      }
    }, tiempo)

    return () => {
      clearTimeout(tiempoCarga);
    };

  }, [peticion, input, tiempo]);

  return estadoActual;
}

export default useBuscarAnime;