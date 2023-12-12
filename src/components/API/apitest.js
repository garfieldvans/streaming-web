const BASE_URL = 'https://api.jikan.moe/v4';

export const fetchAnimeData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/anime`);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching anime data:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};


export const fetchAnimeGenres = async () => {
  try {
    const response = await fetch(`${BASE_URL}/genres/anime`);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching anime data:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};