import axios from 'axios';

const api = axios.create({
  headers: {
    // some custom headers
  },
});

export const getData = (url) => api.get(url).then((response) => response.data);
export const putData = (url, data) => api.put(url, data).then((response) => (response));
export const postData = (url, data) => api.post(url, data).then((response) => (response));
export const deleteData = (url) => api.delete(url).then((response) => (response));
