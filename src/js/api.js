import APIKEY from './api-key.js';

const apiCall = (API) => {
  return {
    getBeers: async text => {
      try {
        const endpoint = `https://beerflix-api.herokuapp.com/api/v1/beers?search=${text}&limit=10
        `;
        const response = await fetch(endpoint, {
          method: 'GET',
          headers: {
          'X-API-KEY': APIKEY,
          },
        });
        if (!response.ok) {
          throw new Error('Error retrieving beers');
        }
        const data = await response.json();
        const beers = data.map(result => {
          return result.show;
        });
        return beers;
      } catch (err) {
        console.error(err.message);
        throw err;
      }
    },
  };
};

export default apiCall;