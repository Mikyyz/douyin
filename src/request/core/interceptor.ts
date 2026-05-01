import instance from "./axios";

import { SUCCESS_CODE } from "@/contants/code";

import { getToken } from "../plugins/auth";

import { handleBusinessError, handleHttpError } from "./error";

// 请求拦截
instance.interceptors.request.use((config) => {
  const custom = config as any;
  // token
  if (custom.withToken !== false && getToken()) {
    config.headers.Authorization = `Bearer ${getToken()}`;
  }
  return config;
});

// 相应拦截
instance.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.status_code !== SUCCESS_CODE) {
      handleBusinessError(res.status_code, res.msg);

      return Promise.reject(res);
    }

    return res;
  },
  (error) => {
    handleHttpError(error.response?.status);
    return Promise.reject(error);
  },
);
