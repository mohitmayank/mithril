import axios from 'axios';
import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

/** @TODO parse json reponse, remove while(1) * */
// const apiDomain = process.env.API_DOMAIN;
let { apiDomain } = publicRuntimeConfig;

if (serverRuntimeConfig && serverRuntimeConfig.serverApiDomain) {
  apiDomain = serverRuntimeConfig.serverApiDomain;
}

const Api = function Api(token) {
  const apiOpts = {
    baseURL: apiDomain,
    headers: {},
  };

  if (token) {
    apiOpts.headers.Authorization = `Bearer ${token}`;
  }

  return axios.create(apiOpts);
};

const AuthApi = Api();

export default Api;

export { AuthApi, Api };
