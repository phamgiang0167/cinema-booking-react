import axios from 'axios';
import { ACCESS_TOKEN, BASE_URL } from 'settings/apiConfig';

const callApi = (endpoint, method = 'GET', data = null) => {
  return axios({
    url: `${BASE_URL}/${endpoint}`,
    method,
    data,
    headers: {'Authorization':"Bearer " + localStorage.getItem('accessToken')}
  });
};

export default callApi;
