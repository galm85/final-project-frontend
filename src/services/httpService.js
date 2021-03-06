import axios from 'axios';

axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('Token');

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete
  };