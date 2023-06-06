const BASE = 'https://api.jikan.moe/v4';

const buscarAnime = async (anime) => {
  const respuesta = await fetch(`${BASE}/anime?q=${encodeURIComponent(anime)}`);

  if (!respuesta.ok) {
    throw new Error("Api fallo")
  }
  return respuesta.json();
}

const verUnAnime = async (anime) => {
  const respuesta = await fetch(`${BASE}/anime/${anime}`)
  
  if (!respuesta.ok) {
    throw new Error("Api fallo")
  }
  return respuesta.json();
}

export {
  buscarAnime,
  verUnAnime
}