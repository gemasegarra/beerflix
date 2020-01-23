const APIKEY = '9H66017-H8VMX7C-NY13E10-8RAY4SW';
const URL = 'https://beerflix-api.herokuapp.com/api/v1/'

const apiCall = (API) => {
  
    return {
      getBeers: async text => {
        try {
          const response = await fetch(`${URL}beers?search=${text}&limit=10`, {
                    method: 'GET',
                    headers: {
                    'X-API-KEY': APIKEY,
                   }})
          if (!response.ok) {
            throw new Error('Error retrieving beers')
          }
          const data = await response.json();
          console.log(data.beers);
          return data.beers

      } catch (err) {
        console.error(err.message);
        throw err;
      }},
      getDetails: id => {
      return fetch(`${URL}/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error retrieving beer ${id}`);
          }
          return response.json();
        })
        .catch(err => {
          console.error(err.message);
          throw err;
        });
    }}
}; 
 export default apiCall;   

