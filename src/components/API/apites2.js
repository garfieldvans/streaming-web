const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
  params: {
    order_by: 'date',
    type: 'movie'
  },
  headers: {
    'X-RapidAPI-Key': '4346c9e427mshd59e9cd77ed8434p16d2eajsnba9c73a4d2a7',
    'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
  }
};

// Using an asynchronous function to await the response
const fetchData = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data; // Returning the data if needed
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

// Call the fetchData function
fetchData();
