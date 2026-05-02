import instance from "./axios";

import { SUCCESS_CODE } from "@/contants/code";

import { AxiosHeaders, isAxiosError } from "axios";

import { getToken } from "../plugins/auth";

import type { ApiResponse } from "../types";
import {
  createBusinessError,
  createCancelError,
  createHttpError,
  createNetworkError,
} from "./error";

// 请求拦截
instance.interceptors.request.use((config) => {
  const token = getToken();
  if (config.withToken !== false && token) {
    const value = `Bearer ${token}`;
    const headers = AxiosHeaders.from(config.headers ?? {});
    headers.set("Authorization", value);
    config.headers = headers;
  }
  return config;
});

// 响应拦截
instance.interceptors.response.use(
  (response: any) => {
    const raw = response.data as ApiResponse;
    const code = raw?.status_code;

    const res: ApiResponse<any> = {
      status_code: code ? code : SUCCESS_CODE,
      message: raw?.message,
      data: raw?.data,
    };

    if (res?.status_code !== SUCCESS_CODE) {
      throw createBusinessError({
        code: res?.status_code,
        message: res?.message ?? "业务请求失败",
        response: res,
      });
    }

    return res as any;
  },
  (error: any) => {
    if (isAxiosError(error)) {
      const httpStatus = error.response?.status;
      if (httpStatus) {
        throw createHttpError({
          status: httpStatus,
          message: error.message || "请求失败",
          originalError: error,
        });
      }

      if (error.name === "CanceledError" || error.code === "ERR_CANCELED") {
        throw createCancelError({
          message: error.message || "请求已取消",
          originalError: error,
        });
      }

      throw createNetworkError({
        message: error.message || "网络异常",
        originalError: error,
      });
    }

    throw createNetworkError({
      message: "未知网络异常",
      originalError: error,
    });
  },
);
