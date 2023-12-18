import {Constants} from '@app/Constants';
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';

const transformResponse = (data: AxiosResponse<any, any>) => data.data;

const captureError = (error: AxiosError) => {
  const formatError = {
    code: error.code,
    message: error.message,
    url: error.config.url,
  };
  return Promise.reject(formatError);
};

export const instanceAuthAxios = axios.create({
  baseURL: Constants.BASE_URL,
});

instanceAuthAxios.interceptors.response.use(transformResponse, captureError);
