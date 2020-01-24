const APIKEY = '9H66017-H8VMX7C-NY13E10-8RAY4SW';

const apiCall = (API = 'https://beerflix-api.herokuapp.com/api/v1/beers') => {
  const beersAPIEndPoint = `${API}?limit=10`
  return {
    getBeers: async text => {
      try {
        const URL = text ? `${API}?search=${text}&limit=10` : beersAPIEndPoint;
        const response = await fetch(URL, {
          method: 'GET',
          headers: {
            'X-API-KEY': APIKEY,
          }
        })
        if (!response.ok) {
          throw new Error('Error retrieving beers')
        }
        const data = await response.json();
        console.log(data.beers);

        return data.beers

      } catch (err) {
        console.error(err.message);
        throw err;
      }
    },

    getDetails: async id => {
      try {
        const response = await fetch(`${API}/${id}`, {
          method: 'GET',
          headers: {
            'X-API-KEY': APIKEY,
          }
        })
        if (!response.ok) {
          throw new Error('Error retrieving beers')
        }
        const data = await response.json();
        console.log(data.beer);
        return data.beer

      } catch (err) {
        console.error(err.message);
        throw err;
      }
    },

    addComment: async (id, comment) => {
      try {
        const response = await fetch(`${API}/${id}/comment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': APIKEY,
          },
          body: JSON.stringify({ comment }),
        })
        if (!response.ok) {
          throw new Error('Error ')
        }
        const data = await response.json();
        return data;
      } catch (err) {
        console.error(err.message);
        throw err;
      }
    },

    addLike: async (id) => {
      try {
        const response = await fetch(`${API}/${id}/like`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': APIKEY,
          },
        })
        if (!response.ok) {
          throw new Error('Error ')
        }
        const data = await response.json();
        return data;

      } catch (err) {
        console.error(err.message);
        throw err;
      }
    }
  }
};

  export default apiCall;
