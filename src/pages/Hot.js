import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Hot = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://unogs-unogs-v1.p.rapidapi.com/genres', {
          headers: {
            'X-RapidAPI-Key': '4346c9e427mshd59e9cd77ed8434p16d2eajsnba9c73a4d2a7',
            'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
          }
        });

        setGenres(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        console.error('Response:', error.response); // Log the response for more details
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Movie Genres from uNoGS API</h1>
      {genres.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Hot;
