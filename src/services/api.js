import axios from 'axios';

const api = axios.create({
  headers: {
    // create api headers tof authentication etc.
    // 'Content-Type': 'application/json; charset=UTF-8',
    // Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

export const getData = (url) => api.get(url).then((response) => response.data);

// export const postData WRITE YOUR OWN