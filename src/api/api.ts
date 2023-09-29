import axios from 'axios';

const baseURL = 'https://brandstestowy.smallhost.pl/api/random';

const api = axios.create({
  baseURL,
});

export default api;
