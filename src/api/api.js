import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://jsonmock.hackerrank.com/api/movies/search',
});
