const BASE_URL = 'https://api.jikan.moe/v4/anime';

export const fetchAnimeData = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching anime data:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};