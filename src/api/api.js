const BASE = 'https://api.jikan.moe/v4';

const buscarAnime = async (anime) => {
  const respuesta = await fetch(`${BASE}/anime?q=${encodeURIComponent(anime)}`);
  return respuesta.json();
}

const verAnime = async (anime) => {
  const respuesta = await fetch(`${BASE}/anime/${anime}`)
  return respuesta.json();
}

export {
  buscarAnime,
  verAnime
}