import axios from 'axios';

var apiClient = axios.create({
  baseURL: 'https://praktyki-react.herokuapp.com',
});

const configureApi = store => {
  apiClient.interceptors.request.use(
    function(config) {
      const state = store.getState();
      if (state.session.token) {
        config.headers['X-User-Email'] = state.session.mail;
        config.headers['X-User-Token'] = state.session.token;
      }
      console.log(store.getState(), config);
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );
};

export {configureApi};
export default apiClient;
