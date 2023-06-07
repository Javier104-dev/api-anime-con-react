const { createContext, useReducer, useEffect } = require("react");

const CacheContext = createContext();
CacheContext.displayName = "Cache";

const cacheReducer = (estado, accion) => {
  const { tipo, carga } = accion;

  switch (tipo) {
    case "CREAR_CACHE":
      return {...estado, [carga.key]: carga.valor};
    
    default:
      return estado;
  }
}

const CacheProvider = ({ children }) => {
  const [estado, dispatch] = useReducer(
      cacheReducer,
      JSON.parse(localStorage.getItem("CACHE_PAGINA")) || {}
    );

  useEffect(() => {
    const estadoActual = JSON.stringify(estado);
    localStorage.setItem("CACHE_PAGINA", estadoActual)
  }, [estado]);

  return <CacheContext.Provider value={{estado, dispatch}}>{children}</CacheContext.Provider>
}

export {
  CacheContext,
  CacheProvider
}