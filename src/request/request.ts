import "./core/interceptor";
import "./plugins/defaultAuthExpiredHandler";

import instance from "./core/axios";

import { ApiResponse, RequestConfig, RequestPromise } from "./types";
import { replacePathParams } from "@/utils";

class Request {
  get<T = any>(url: string, config?: RequestConfig & { pathParams?: Record<string, any> }): RequestPromise<T> {
    const finalUrl = replacePathParams(url, config?.params);
    return instance.get<any, ApiResponse<T>>(finalUrl, {
      ...config,
      params: config?.params,
    });
  }

  post<T = any>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): RequestPromise<T> {
    return instance.post<any, ApiResponse<T>>(url, data, config);
  }

  put<T = any>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): RequestPromise<T> {
    return instance.put<any, ApiResponse<T>>(url, data, config);
  }

  delete<T = any>(url: string, config?: RequestConfig): RequestPromise<T> {
    return instance.delete<any, ApiResponse<T>>(url, config);
  }

  patch<T = any>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): RequestPromise<T> {
    return instance.patch<any, ApiResponse<T>>(url, data, config);
  }
}

export default new Request();
